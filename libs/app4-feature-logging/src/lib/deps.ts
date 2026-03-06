import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedLogging } from '@cli-coordinator/shared-logging';
import { sharedMetrics } from '@cli-coordinator/shared-metrics';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureLoggingDeps = {
  app4DataAccess,
  sharedLogging,
  sharedMetrics,
};
