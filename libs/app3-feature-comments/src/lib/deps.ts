import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureCommentsDeps = {
  app3DataAccess,
  sharedEvents,
};
