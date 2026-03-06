import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedLogging } from '@cli-coordinator/shared-logging';

// Re-export dependency references to establish NX dependency graph
export const sharedQueueDeps = {
  sharedEvents,
  sharedLogging,
};
