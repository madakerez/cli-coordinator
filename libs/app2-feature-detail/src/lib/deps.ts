import { app2DataAccess } from '@cli-coordinator/app2-data-access';

// Re-export dependency references to establish NX dependency graph
export const app2FeatureDetailDeps = {
  app2DataAccess,
};
