import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureProfileDeps = {
  app1DataAccess,
  sharedAuth,
};
