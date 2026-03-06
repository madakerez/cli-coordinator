import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedStorage } from '@cli-coordinator/shared-storage';
import { sharedQueue } from '@cli-coordinator/shared-queue';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureBackupDeps = {
  app4DataAccess,
  sharedStorage,
  sharedQueue,
};
