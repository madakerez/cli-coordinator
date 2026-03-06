import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UtilParsers } from '@cli-coordinator/app4-util-parsers';
import { app1UtilFormatters } from '@cli-coordinator/app1-util-formatters';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureExportDeps = {
  app4DataAccess,
  app4UtilParsers,
  app1UtilFormatters,
};
