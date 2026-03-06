import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';
import { sharedAnalytics } from '@cli-coordinator/shared-analytics';
import { app2UiCharts } from '@cli-coordinator/app2-ui-charts';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureAnalyticsDeepDeps = {
  app4DataAccess,
  app4UiCharts,
  sharedAnalytics,
  app2UiCharts,
};
