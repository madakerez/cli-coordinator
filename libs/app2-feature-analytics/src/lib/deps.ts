import { app2DataAccess } from '@cli-coordinator/app2-data-access';
import { app2UiCharts } from '@cli-coordinator/app2-ui-charts';

// Re-export dependency references to establish NX dependency graph
export const app2FeatureAnalyticsDeps = {
  app2DataAccess,
  app2UiCharts,
};
