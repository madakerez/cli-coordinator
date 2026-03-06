// Dependency map: defines which libs depend on which other libs,
// and which apps depend on which libs.
//
// Designed so each app has a DIFFERENT number of dependencies:
//   app2: lightweight  (4 libs)  — starts building first
//   app3: medium       (15 libs) — starts mid-way
//   app1: heavy        (19 libs) — starts later
//   app4: heaviest     (25 libs) — starts last (depends on libs from app1/app2 too)

export const sharedLibs = [
  'shared-config',
  'shared-models',
  'shared-utils',
  'shared-ui',
  'shared-auth',
  'shared-http',
  'shared-logging',
  'shared-testing',
] as const;

export const app1Libs = [
  'app1-data-access',
  'app1-feature-home',
  'app1-feature-profile',
  'app1-feature-settings',
  'app1-feature-dashboard',
  'app1-feature-notifications',
  'app1-ui-components',
  'app1-ui-layout',
  'app1-ui-forms',
  'app1-util-validators',
  'app1-util-formatters',
] as const;

export const app2Libs = [
  'app2-data-access',
  'app2-feature-home',
  'app2-feature-search',
  'app2-feature-detail',
  'app2-feature-favorites',
  'app2-feature-analytics',
  'app2-ui-components',
  'app2-ui-layout',
  'app2-ui-charts',
  'app2-util-validators',
  'app2-util-transforms',
] as const;

export const app3Libs = [
  'app3-data-access',
  'app3-feature-home',
  'app3-feature-editor',
  'app3-feature-preview',
  'app3-feature-history',
  'app3-feature-collaboration',
  'app3-ui-components',
  'app3-ui-layout',
  'app3-ui-toolbar',
  'app3-util-validators',
] as const;

export const app4Libs = [
  'app4-data-access',
  'app4-feature-home',
  'app4-feature-reports',
  'app4-feature-admin',
  'app4-feature-monitoring',
  'app4-feature-export',
  'app4-ui-components',
  'app4-ui-layout',
  'app4-ui-charts',
  'app4-util-validators',
  'app4-util-parsers',
] as const;

export const allLibs = [
  ...sharedLibs,
  ...app1Libs,
  ...app2Libs,
  ...app3Libs,
  ...app4Libs,
] as const;

// Lib-to-lib dependencies (what each lib imports from)
export const libDeps: Record<string, string[]> = {
  // Shared libs - layered dependencies
  'shared-config': [],
  'shared-models': ['shared-config'],
  'shared-utils': ['shared-config'],
  'shared-ui': ['shared-utils'],
  'shared-http': ['shared-config', 'shared-models'],
  'shared-auth': ['shared-http', 'shared-models'],
  'shared-logging': ['shared-config'],
  'shared-testing': ['shared-utils'],

  // App1 libs — depend on many shared libs
  'app1-data-access': ['shared-http', 'shared-models'],
  'app1-feature-home': ['app1-data-access', 'shared-ui'],
  'app1-feature-profile': ['app1-data-access', 'shared-auth'],
  'app1-feature-settings': ['app1-data-access', 'shared-ui'],
  'app1-feature-dashboard': ['app1-data-access', 'shared-ui', 'app1-ui-components'],
  'app1-feature-notifications': ['app1-data-access', 'shared-ui'],
  'app1-ui-components': ['shared-ui'],
  'app1-ui-layout': ['shared-ui', 'app1-ui-components'],
  'app1-ui-forms': ['shared-ui', 'app1-util-validators'],
  'app1-util-validators': ['shared-utils'],
  'app1-util-formatters': ['shared-utils'],

  // App2 libs — MINIMAL shared deps, mostly self-contained
  // Only shared-config is needed, NO shared-http, NO shared-auth, NO shared-ui
  'app2-data-access': ['shared-config'],
  'app2-feature-home': ['app2-data-access'],
  'app2-feature-search': ['app2-data-access'],
  'app2-feature-detail': ['app2-data-access'],
  'app2-feature-favorites': ['app2-data-access'],
  'app2-feature-analytics': ['app2-data-access', 'app2-ui-charts'],
  'app2-ui-components': [],
  'app2-ui-layout': ['app2-ui-components'],
  'app2-ui-charts': ['app2-ui-components'],
  'app2-util-validators': ['shared-config'],
  'app2-util-transforms': ['shared-config'],

  // App3 libs — moderate shared deps
  'app3-data-access': ['shared-http', 'shared-models'],
  'app3-feature-home': ['app3-data-access', 'shared-ui'],
  'app3-feature-editor': ['app3-data-access', 'shared-ui', 'app3-ui-toolbar'],
  'app3-feature-preview': ['app3-data-access', 'shared-ui'],
  'app3-feature-history': ['app3-data-access', 'shared-ui'],
  'app3-feature-collaboration': ['app3-data-access', 'shared-auth'],
  'app3-ui-components': ['shared-ui'],
  'app3-ui-layout': ['shared-ui', 'app3-ui-components'],
  'app3-ui-toolbar': ['shared-ui', 'app3-ui-components'],
  'app3-util-validators': ['shared-utils'],

  // App4 libs — HEAVY, depends on shared + cross-app libs from app1 and app2
  'app4-data-access': ['shared-http', 'shared-models', 'shared-logging'],
  'app4-feature-home': ['app4-data-access', 'shared-ui'],
  'app4-feature-reports': ['app4-data-access', 'app4-ui-charts', 'app1-data-access'],
  'app4-feature-admin': ['app4-data-access', 'shared-auth', 'app1-util-validators'],
  'app4-feature-monitoring': ['app4-data-access', 'app4-ui-charts', 'shared-logging', 'app2-ui-charts'],
  'app4-feature-export': ['app4-data-access', 'app4-util-parsers', 'app1-util-formatters'],
  'app4-ui-components': ['shared-ui'],
  'app4-ui-layout': ['shared-ui', 'app4-ui-components'],
  'app4-ui-charts': ['shared-ui', 'shared-utils'],
  'app4-util-validators': ['shared-utils'],
  'app4-util-parsers': ['shared-utils', 'shared-models'],
};

// App-to-lib dependencies (direct imports in each app's main.ts)
// NX will also detect transitive deps, but these are the explicit imports.
export const appDeps: Record<string, string[]> = {
  // app1: heavy — 8 shared + 11 own = 19 libs
  app1: [
    'shared-config', 'shared-models', 'shared-utils', 'shared-ui',
    'shared-auth', 'shared-http', 'shared-logging',
    ...app1Libs,
  ],
  // app2: lightweight — only shared-config + 3 own = 4 direct deps
  // No shared-http, no shared-auth, no shared-ui — self-contained app
  app2: [
    'shared-config',
    'app2-data-access',
    'app2-feature-home',
    'app2-ui-components',
  ],
  // app3: medium — 5 shared + 10 own = 15 libs
  app3: [
    'shared-config', 'shared-models', 'shared-utils', 'shared-ui',
    'shared-http',
    ...app3Libs,
  ],
  // app4: heaviest — 7 shared + 11 own + cross-app deps resolved transitively = ~25+ libs
  app4: [
    'shared-config', 'shared-models', 'shared-utils', 'shared-ui',
    'shared-auth', 'shared-http', 'shared-logging',
    ...app4Libs,
  ],
};
