import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedQueue } from '@cli-coordinator/shared-queue';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureSchedulerDeps = {
  app4DataAccess,
  sharedQueue,
  sharedEvents,
};
