import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedConfig } from '@cli-coordinator/shared-config';

// Re-export dependency references to establish NX dependency graph
export const app3FeaturePluginsDeps = {
  app3DataAccess,
  sharedConfig,
};
