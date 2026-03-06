import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedAnalytics } from '@cli-coordinator/shared-analytics';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureAnalyticsDeps = {
  app3DataAccess,
  sharedAnalytics,
};
