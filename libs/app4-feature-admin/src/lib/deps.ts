import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';
import { app1UtilValidators } from '@cli-coordinator/app1-util-validators';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureAdminDeps = {
  app4DataAccess,
  sharedAuth,
  app1UtilValidators,
};
