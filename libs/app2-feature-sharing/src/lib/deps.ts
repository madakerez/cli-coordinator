import { app2DataAccess } from '@cli-coordinator/app2-data-access';
import { sharedConfig } from '@cli-coordinator/shared-config';

// Re-export dependency references to establish NX dependency graph
export const app2FeatureSharingDeps = {
  app2DataAccess,
  sharedConfig,
};
