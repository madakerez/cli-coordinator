import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';
import { sharedPermissions } from '@cli-coordinator/shared-permissions';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureSharingDeps = {
  app3DataAccess,
  sharedAuth,
  sharedPermissions,
};
