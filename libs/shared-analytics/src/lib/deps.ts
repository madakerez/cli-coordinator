import { sharedEvents } from '@cli-coordinator/shared-events';
import { sharedHttp } from '@cli-coordinator/shared-http';

// Re-export dependency references to establish NX dependency graph
export const sharedAnalyticsDeps = {
  sharedEvents,
  sharedHttp,
};
