import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');
const LIBS_DIR = join(ROOT, 'libs');

interface LibDef {
  name: string;
  deps: string[];
}

// --- New shared libs (12) ---
const newSharedLibs: LibDef[] = [
  { name: 'shared-cache', deps: ['shared-config'] },
  { name: 'shared-events', deps: ['shared-config', 'shared-models'] },
  { name: 'shared-i18n', deps: [] },
  { name: 'shared-crypto', deps: ['shared-utils'] },
  { name: 'shared-validation', deps: ['shared-utils', 'shared-models'] },
  { name: 'shared-notifications', deps: ['shared-events', 'shared-models'] },
  { name: 'shared-permissions', deps: ['shared-auth', 'shared-models'] },
  { name: 'shared-analytics', deps: ['shared-events', 'shared-http'] },
  { name: 'shared-storage', deps: ['shared-config'] },
  { name: 'shared-queue', deps: ['shared-events', 'shared-logging'] },
  { name: 'shared-metrics', deps: ['shared-logging', 'shared-config'] },
  { name: 'shared-feature-flags', deps: ['shared-config', 'shared-http'] },
];

// --- New app1 libs (25) ---
const newApp1Libs: LibDef[] = [
  { name: 'app1-feature-chat', deps: ['app1-data-access', 'shared-events'] },
  { name: 'app1-feature-calendar', deps: ['app1-data-access', 'shared-ui', 'shared-i18n'] },
  { name: 'app1-feature-analytics', deps: ['app1-data-access', 'shared-analytics', 'app1-ui-components'] },
  { name: 'app1-feature-search', deps: ['app1-data-access', 'shared-ui'] },
  { name: 'app1-feature-files', deps: ['app1-data-access', 'shared-storage'] },
  { name: 'app1-feature-tasks', deps: ['app1-data-access', 'shared-ui', 'app1-ui-forms'] },
  { name: 'app1-feature-comments', deps: ['app1-data-access', 'shared-events'] },
  { name: 'app1-feature-tags', deps: ['app1-data-access'] },
  { name: 'app1-feature-export', deps: ['app1-data-access', 'shared-storage'] },
  { name: 'app1-feature-import', deps: ['app1-data-access', 'shared-validation'] },
  { name: 'app1-feature-billing', deps: ['app1-data-access', 'shared-crypto', 'shared-permissions'] },
  { name: 'app1-feature-audit', deps: ['app1-data-access', 'shared-logging'] },
  { name: 'app1-feature-webhooks', deps: ['app1-data-access', 'shared-http', 'shared-events'] },
  { name: 'app1-feature-integrations', deps: ['app1-data-access', 'shared-http', 'shared-auth'] },
  { name: 'app1-ui-modals', deps: ['shared-ui', 'app1-ui-components'] },
  { name: 'app1-ui-tables', deps: ['shared-ui', 'app1-ui-components'] },
  { name: 'app1-ui-cards', deps: ['shared-ui'] },
  { name: 'app1-ui-navigation', deps: ['shared-ui', 'app1-ui-layout'] },
  { name: 'app1-util-dates', deps: ['shared-utils', 'shared-i18n'] },
  { name: 'app1-util-math', deps: [] },
  { name: 'app1-util-strings', deps: ['shared-utils'] },
  { name: 'app1-util-colors', deps: [] },
  { name: 'app1-util-csv', deps: ['app1-util-strings'] },
  { name: 'app1-data-sync', deps: ['app1-data-access', 'shared-events', 'shared-queue'] },
  { name: 'app1-data-cache', deps: ['app1-data-access', 'shared-cache'] },
];

// --- New app2 libs (20) - mostly self-contained ---
const newApp2Libs: LibDef[] = [
  { name: 'app2-feature-compare', deps: ['app2-data-access'] },
  { name: 'app2-feature-export', deps: ['app2-data-access'] },
  { name: 'app2-feature-import', deps: ['app2-data-access'] },
  { name: 'app2-feature-filters', deps: ['app2-data-access', 'app2-ui-components'] },
  { name: 'app2-feature-tags', deps: ['app2-data-access'] },
  { name: 'app2-feature-categories', deps: ['app2-data-access', 'app2-ui-components'] },
  { name: 'app2-feature-reviews', deps: ['app2-data-access'] },
  { name: 'app2-feature-ratings', deps: ['app2-data-access'] },
  { name: 'app2-feature-bookmarks', deps: ['app2-data-access'] },
  { name: 'app2-feature-sharing', deps: ['app2-data-access', 'shared-config'] },
  { name: 'app2-feature-notifications', deps: ['app2-data-access'] },
  { name: 'app2-feature-history', deps: ['app2-data-access'] },
  { name: 'app2-ui-cards', deps: ['app2-ui-components'] },
  { name: 'app2-ui-lists', deps: ['app2-ui-components'] },
  { name: 'app2-ui-forms', deps: ['app2-ui-components'] },
  { name: 'app2-ui-modals', deps: ['app2-ui-components'] },
  { name: 'app2-util-formatting', deps: [] },
  { name: 'app2-util-sorting', deps: [] },
  { name: 'app2-util-filtering', deps: [] },
  { name: 'app2-util-dates', deps: [] },
];

// --- New app3 libs (22) ---
const newApp3Libs: LibDef[] = [
  { name: 'app3-feature-templates', deps: ['app3-data-access', 'shared-ui'] },
  { name: 'app3-feature-export', deps: ['app3-data-access', 'shared-storage'] },
  { name: 'app3-feature-import', deps: ['app3-data-access', 'shared-validation'] },
  { name: 'app3-feature-comments', deps: ['app3-data-access', 'shared-events'] },
  { name: 'app3-feature-versioning', deps: ['app3-data-access', 'app3-feature-history'] },
  { name: 'app3-feature-sharing', deps: ['app3-data-access', 'shared-auth', 'shared-permissions'] },
  { name: 'app3-feature-search', deps: ['app3-data-access', 'shared-ui'] },
  { name: 'app3-feature-media', deps: ['app3-data-access', 'shared-storage'] },
  { name: 'app3-feature-formatting', deps: ['app3-data-access', 'shared-ui', 'app3-ui-toolbar'] },
  { name: 'app3-feature-plugins', deps: ['app3-data-access', 'shared-config'] },
  { name: 'app3-feature-themes', deps: ['app3-data-access', 'shared-ui'] },
  { name: 'app3-feature-analytics', deps: ['app3-data-access', 'shared-analytics'] },
  { name: 'app3-ui-panels', deps: ['shared-ui', 'app3-ui-components'] },
  { name: 'app3-ui-modals', deps: ['shared-ui', 'app3-ui-components'] },
  { name: 'app3-ui-forms', deps: ['shared-ui', 'app3-ui-components'] },
  { name: 'app3-ui-cards', deps: ['shared-ui'] },
  { name: 'app3-ui-tree', deps: ['shared-ui', 'app3-ui-components'] },
  { name: 'app3-util-markdown', deps: ['shared-utils'] },
  { name: 'app3-util-html', deps: ['shared-utils'] },
  { name: 'app3-util-diff', deps: ['shared-utils'] },
  { name: 'app3-util-compression', deps: [] },
  { name: 'app3-data-sync', deps: ['app3-data-access', 'shared-events', 'shared-queue'] },
];

// --- New app4 libs (35) - heaviest, cross-app deps ---
const newApp4Libs: LibDef[] = [
  { name: 'app4-feature-alerts', deps: ['app4-data-access', 'shared-notifications', 'shared-events'] },
  { name: 'app4-feature-dashboards', deps: ['app4-data-access', 'app4-ui-charts', 'shared-ui'] },
  { name: 'app4-feature-users', deps: ['app4-data-access', 'shared-auth', 'shared-permissions'] },
  { name: 'app4-feature-roles', deps: ['app4-data-access', 'shared-permissions'] },
  { name: 'app4-feature-audit', deps: ['app4-data-access', 'shared-logging', 'app1-feature-audit'] },
  { name: 'app4-feature-billing', deps: ['app4-data-access', 'shared-crypto', 'app1-feature-billing'] },
  { name: 'app4-feature-integrations', deps: ['app4-data-access', 'shared-http', 'shared-events'] },
  { name: 'app4-feature-webhooks', deps: ['app4-data-access', 'shared-http', 'shared-events'] },
  { name: 'app4-feature-scheduler', deps: ['app4-data-access', 'shared-queue', 'shared-events'] },
  { name: 'app4-feature-import', deps: ['app4-data-access', 'app4-util-parsers', 'shared-validation'] },
  { name: 'app4-feature-templates', deps: ['app4-data-access', 'shared-ui', 'app3-feature-templates'] },
  { name: 'app4-feature-search', deps: ['app4-data-access', 'shared-ui'] },
  { name: 'app4-feature-notifications', deps: ['app4-data-access', 'shared-notifications'] },
  { name: 'app4-feature-analytics-deep', deps: ['app4-data-access', 'app4-ui-charts', 'shared-analytics', 'app2-ui-charts'] },
  { name: 'app4-feature-compliance', deps: ['app4-data-access', 'shared-permissions', 'shared-logging'] },
  { name: 'app4-feature-backup', deps: ['app4-data-access', 'shared-storage', 'shared-queue'] },
  { name: 'app4-feature-migration', deps: ['app4-data-access', 'shared-validation', 'app4-util-parsers'] },
  { name: 'app4-feature-sso', deps: ['app4-data-access', 'shared-auth', 'shared-crypto'] },
  { name: 'app4-feature-api-keys', deps: ['app4-data-access', 'shared-auth', 'shared-crypto'] },
  { name: 'app4-feature-logging', deps: ['app4-data-access', 'shared-logging', 'shared-metrics'] },
  { name: 'app4-ui-tables', deps: ['shared-ui', 'app4-ui-components'] },
  { name: 'app4-ui-forms', deps: ['shared-ui', 'app4-ui-components'] },
  { name: 'app4-ui-modals', deps: ['shared-ui', 'app4-ui-components'] },
  { name: 'app4-ui-panels', deps: ['shared-ui', 'app4-ui-components'] },
  { name: 'app4-ui-navigation', deps: ['shared-ui', 'app4-ui-layout'] },
  { name: 'app4-ui-cards', deps: ['shared-ui'] },
  { name: 'app4-ui-badges', deps: ['shared-ui'] },
  { name: 'app4-util-dates', deps: ['shared-utils'] },
  { name: 'app4-util-crypto', deps: ['shared-crypto'] },
  { name: 'app4-util-csv', deps: ['shared-utils'] },
  { name: 'app4-util-json', deps: ['shared-utils', 'shared-models'] },
  { name: 'app4-util-formatting', deps: ['shared-utils'] },
  { name: 'app4-data-sync', deps: ['app4-data-access', 'shared-events', 'shared-queue'] },
  { name: 'app4-data-cache', deps: ['app4-data-access', 'shared-cache'] },
  { name: 'app4-data-aggregator', deps: ['app4-data-access', 'shared-metrics', 'app4-ui-charts'] },
];

const allNewLibs = [
  ...newSharedLibs,
  ...newApp1Libs,
  ...newApp2Libs,
  ...newApp3Libs,
  ...newApp4Libs,
];

function toCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function createLib(lib: LibDef) {
  const dir = join(LIBS_DIR, lib.name);
  if (existsSync(dir)) {
    console.log('  SKIP ' + lib.name + ' (exists)');
    return;
  }

  const srcDir = join(dir, 'src', 'lib');
  mkdirSync(srcDir, { recursive: true });

  const fnName = toCamelCase(lib.name);

  writeFileSync(
    join(srcDir, lib.name + '.ts'),
    'export function ' + fnName + '(): string {\n  return \'' + lib.name + '\';\n}\n'
  );

  writeFileSync(
    join(dir, 'src', 'index.ts'),
    'export * from \'./lib/' + lib.name + '.js\';\n'
  );

  const pkg = {
    name: '@cli-coordinator/' + lib.name,
    version: '0.0.1',
    private: true,
    type: 'module',
    main: './dist/index.js',
    module: './dist/index.js',
    types: './dist/index.d.ts',
    exports: {
      './package.json': './package.json',
      '.': {
        types: './dist/index.d.ts',
        import: './dist/index.js',
        default: './dist/index.js',
      },
    },
    nx: {
      name: lib.name,
      sourceRoot: 'libs/' + lib.name + '/src',
      targets: {
        build: {
          executor: '@nx/js:swc',
          outputs: ['{options.outputPath}'],
          options: {
            outputPath: 'libs/' + lib.name + '/dist',
            main: 'libs/' + lib.name + '/src/index.ts',
            tsConfig: 'libs/' + lib.name + '/tsconfig.lib.json',
            skipTypeCheck: true,
            stripLeadingPaths: true,
          },
        },
      },
    },
    dependencies: {
      '@swc/helpers': '~0.5.18',
    },
  };
  writeFileSync(join(dir, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');

  writeFileSync(
    join(dir, 'tsconfig.json'),
    JSON.stringify(
      {
        extends: '../../tsconfig.base.json',
        files: [],
        include: [],
        references: [{ path: './tsconfig.lib.json' }],
      },
      null,
      2
    ) + '\n'
  );

  writeFileSync(
    join(dir, 'tsconfig.lib.json'),
    JSON.stringify(
      {
        extends: '../../tsconfig.base.json',
        compilerOptions: {
          baseUrl: '.',
          rootDir: 'src',
          outDir: 'dist',
          tsBuildInfoFile: 'dist/tsconfig.lib.tsbuildinfo',
          emitDeclarationOnly: true,
          forceConsistentCasingInFileNames: true,
          types: ['node'],
        },
        include: ['src/**/*.ts'],
        references: [],
      },
      null,
      2
    ) + '\n'
  );

  const swcrc = {
    jsc: {
      target: 'es2017',
      parser: { syntax: 'typescript', decorators: true, dynamicImport: true },
      transform: { decoratorMetadata: true, legacyDecorator: true },
      keepClassNames: true,
      externalHelpers: true,
      loose: true,
    },
    module: { type: 'es6' },
    sourceMaps: true,
    exclude: [
      'jest.config.[ct]s',
      '.*\\.spec.tsx?$',
      '.*\\.test.tsx?$',
      './src/jest-setup.ts$',
      './**/jest-setup.ts$',
      '.*.js$',
    ],
  };
  writeFileSync(join(dir, '.swcrc'), JSON.stringify(swcrc, null, 2) + '\n');

  console.log('  OK   ' + lib.name);
}

console.log('\nGenerating ' + allNewLibs.length + ' new libs...\n');

let created = 0;
let skipped = 0;
for (const lib of allNewLibs) {
  if (existsSync(join(LIBS_DIR, lib.name))) {
    skipped++;
    console.log('  SKIP ' + lib.name);
  } else {
    createLib(lib);
    created++;
  }
}

console.log('\nDone: ' + created + ' created, ' + skipped + ' skipped');
console.log('Total libs: ' + (51 + created));
console.log('\nNext: update scripts/deps-map.ts with new lib definitions');
