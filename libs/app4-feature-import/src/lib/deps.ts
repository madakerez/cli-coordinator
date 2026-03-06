import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UtilParsers } from '@cli-coordinator/app4-util-parsers';
import { sharedValidation } from '@cli-coordinator/shared-validation';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureImportDeps = {
  app4DataAccess,
  app4UtilParsers,
  sharedValidation,
};
