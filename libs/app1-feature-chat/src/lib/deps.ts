import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureChatDeps = {
  app1DataAccess,
  sharedEvents,
};
