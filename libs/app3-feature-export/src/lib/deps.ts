import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedStorage } from '@cli-coordinator/shared-storage';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureExportDeps = {
  app3DataAccess,
  sharedStorage,
};
