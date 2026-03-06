import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureAdminDeps = {
  app4DataAccess,
  sharedAuth,
};
