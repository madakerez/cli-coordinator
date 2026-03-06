import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedValidation } from '@cli-coordinator/shared-validation';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureImportDeps = {
  app3DataAccess,
  sharedValidation,
};
