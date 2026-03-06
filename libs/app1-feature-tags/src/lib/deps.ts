import { app1DataAccess } from '@cli-coordinator/app1-data-access';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureTagsDeps = {
  app1DataAccess,
};
