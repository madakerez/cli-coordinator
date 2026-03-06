import { sharedLogging } from '@cli-coordinator/shared-logging';
import { sharedConfig } from '@cli-coordinator/shared-config';

// Re-export dependency references to establish NX dependency graph
export const sharedMetricsDeps = {
  sharedLogging,
  sharedConfig,
};
