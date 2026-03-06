import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { libDeps, appDeps, allLibs } from './deps-map';

const ROOT = join(__dirname, '..');
const LIBS_DIR = join(ROOT, 'libs');
const APPS_DIR = join(ROOT, 'apps');

function toCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

let libsUpdated = 0;
let appsUpdated = 0;

// Wire lib-to-lib deps
for (const libName of allLibs) {
  const deps = libDeps[libName];
  if (!deps || deps.length === 0) continue;

  const libDir = join(LIBS_DIR, libName, 'src', 'lib');
  if (!existsSync(libDir)) {
    console.log(`  SKIP ${libName} (dir missing)`);
    continue;
  }

  const fnName = toCamelCase(libName);

  // Generate deps.ts with real imports
  const imports = deps
    .map((dep) => `import { ${toCamelCase(dep)} } from '@cli-coordinator/${dep}';`)
    .join('\n');

  const depsObj = deps.map((dep) => `  ${toCamelCase(dep)},`).join('\n');

  const depsContent = `${imports}

// Re-export dependency references to establish NX dependency graph
export const ${fnName}Deps = {
${depsObj}
};
`;

  writeFileSync(join(libDir, 'deps.ts'), depsContent);

  // Ensure index.ts re-exports deps
  const indexPath = join(LIBS_DIR, libName, 'src', 'index.ts');
  const indexContent = readFileSync(indexPath, 'utf-8');
  if (!indexContent.includes('./lib/deps')) {
    writeFileSync(indexPath, indexContent.trimEnd() + "\nexport * from './lib/deps';\n");
  }

  libsUpdated++;
}

// Wire app-to-lib deps in main.ts
for (const [appName, deps] of Object.entries(appDeps)) {
  const mainPath = join(APPS_DIR, appName, 'src', 'main.ts');
  if (!existsSync(mainPath)) {
    console.log(`  SKIP ${appName} (main.ts missing)`);
    continue;
  }

  const mainContent = readFileSync(mainPath, 'utf-8');

  // Find existing non-cli-coordinator imports (Angular bootstrap etc)
  const otherLines = mainContent
    .split('\n')
    .filter((line) => !line.startsWith("import '@cli-coordinator/"));

  // Build new import lines from deps
  const importLines = deps
    .map((dep) => `import '@cli-coordinator/${dep}';`)
    .join('\n');

  const newMain = importLines + '\n\n' + otherLines.join('\n').replace(/^\n+/, '');

  writeFileSync(mainPath, newMain);
  appsUpdated++;
}

console.log(`\nDone: ${libsUpdated} libs wired, ${appsUpdated} apps updated`);
