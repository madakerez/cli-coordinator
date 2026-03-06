import { execSync } from 'child_process';
import { allLibs, libDeps } from './deps-map';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');

function run(cmd: string) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit', env: { ...process.env, NX_IGNORE_UNSUPPORTED_TS_SETUP: 'true' } });
}

// Step 1: Generate all libs via nx g @nx/js:library
for (const lib of allLibs) {
  const dir = `libs/${lib}`;
  if (existsSync(join(ROOT, dir))) {
    console.log(`Skipping ${lib} (already exists)`);
    continue;
  }
  run(`npx nx g @nx/js:library --name=${lib} --directory=${dir} --bundler=swc --unitTestRunner=none --interactive=false`);
}

// Step 2: Set up dependency imports between libs
console.log('\n--- Setting up inter-library dependencies ---\n');

for (const lib of allLibs) {
  const deps = libDeps[lib] || [];
  if (deps.length === 0) continue;

  const srcDir = join(ROOT, 'libs', lib, 'src');
  const indexPath = join(srcDir, 'index.ts');
  const libDir = join(srcDir, 'lib');

  if (!existsSync(libDir)) {
    mkdirSync(libDir, { recursive: true });
  }

  // Create a deps.ts file that imports from dependencies
  const imports = deps
    .map((dep) => `import { ${camelCase(dep)} } from '@cli-coordinator/${dep}';`)
    .join('\n');
  const exports = deps
    .map((dep) => `  ${camelCase(dep)},`)
    .join('\n');

  const depsContent = `${imports}

// Re-export dependency references to establish NX dependency graph
export const ${camelCase(lib)}Deps = {
${exports}
};
`;
  writeFileSync(join(libDir, 'deps.ts'), depsContent);

  // Update index.ts to export deps
  const existingIndex = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : '';
  if (!existingIndex.includes('./lib/deps')) {
    writeFileSync(indexPath, existingIndex.trimEnd() + "\nexport * from './lib/deps';\n");
  }
}

// Step 3: Set up app imports (so NX detects app -> lib dependencies)
console.log('\n--- Setting up app dependencies ---\n');

import { appDeps } from './deps-map';

for (const [app, deps] of Object.entries(appDeps)) {
  const mainPath = join(ROOT, 'apps', app, 'src', 'main.ts');
  if (!existsSync(mainPath)) {
    console.log(`Warning: ${mainPath} not found, skipping`);
    continue;
  }

  const imports = deps
    .map((dep) => `import '@cli-coordinator/${dep}';`)
    .join('\n');

  const existing = readFileSync(mainPath, 'utf-8');
  writeFileSync(mainPath, `${imports}\n\n${existing}`);
}

console.log('\nDone! Generated', allLibs.length, 'libraries with dependency graph.');

function camelCase(str: string): string {
  return str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}
