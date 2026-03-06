import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedValidation } from '@cli-coordinator/shared-validation';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureImportDeps = {
  app1DataAccess,
  sharedValidation,
};
