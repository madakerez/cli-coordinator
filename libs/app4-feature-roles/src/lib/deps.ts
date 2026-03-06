import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedPermissions } from '@cli-coordinator/shared-permissions';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureRolesDeps = {
  app4DataAccess,
  sharedPermissions,
};
