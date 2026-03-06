import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedValidation } from '@cli-coordinator/shared-validation';
import { app4UtilParsers } from '@cli-coordinator/app4-util-parsers';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureMigrationDeps = {
  app4DataAccess,
  sharedValidation,
  app4UtilParsers,
};
