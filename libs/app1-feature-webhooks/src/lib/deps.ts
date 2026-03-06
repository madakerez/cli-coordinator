import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedHttp } from '@cli-coordinator/shared-http';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureWebhooksDeps = {
  app1DataAccess,
  sharedHttp,
  sharedEvents,
};
