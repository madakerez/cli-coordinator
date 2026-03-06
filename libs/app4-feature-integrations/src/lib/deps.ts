import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedHttp } from '@cli-coordinator/shared-http';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureIntegrationsDeps = {
  app4DataAccess,
  sharedHttp,
  sharedEvents,
};
