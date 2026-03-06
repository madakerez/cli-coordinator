import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedQueue } from '@cli-coordinator/shared-queue';

// Re-export dependency references to establish NX dependency graph
export const app1DataSyncDeps = {
  app1DataAccess,
  sharedEvents,
  sharedQueue,
};
