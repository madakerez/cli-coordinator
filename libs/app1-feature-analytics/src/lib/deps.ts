import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedAnalytics } from '@cli-coordinator/shared-analytics';
import { app1UiComponents } from '@cli-coordinator/app1-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureAnalyticsDeps = {
  app1DataAccess,
  sharedAnalytics,
  app1UiComponents,
};
