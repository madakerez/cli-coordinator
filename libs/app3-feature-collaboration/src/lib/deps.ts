import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureCollaborationDeps = {
  app3DataAccess,
  sharedAuth,
};
