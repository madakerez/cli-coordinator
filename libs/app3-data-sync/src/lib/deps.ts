import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedQueue } from '@cli-coordinator/shared-queue';

// Re-export dependency references to establish NX dependency graph
export const app3DataSyncDeps = {
  app3DataAccess,
  sharedEvents,
  sharedQueue,
};
