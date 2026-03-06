import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { app3FeatureHistory } from '@cli-coordinator/app3-feature-history';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureVersioningDeps = {
  app3DataAccess,
  app3FeatureHistory,
};
