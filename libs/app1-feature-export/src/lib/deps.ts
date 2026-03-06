import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedStorage } from '@cli-coordinator/shared-storage';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureExportDeps = {
  app1DataAccess,
  sharedStorage,
};
