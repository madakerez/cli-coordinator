import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedQueue } from '@cli-coordinator/shared-queue';

// Re-export dependency references to establish NX dependency graph
export const app4DataSyncDeps = {
  app4DataAccess,
  sharedEvents,
  sharedQueue,
};
