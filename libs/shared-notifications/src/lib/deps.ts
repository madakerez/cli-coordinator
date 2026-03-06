import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedModels } from '@cli-coordinator/shared-models';

// Re-export dependency references to establish NX dependency graph
export const sharedNotificationsDeps = {
  sharedEvents,
  sharedModels,
};
