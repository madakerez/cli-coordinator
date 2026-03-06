import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';
import { sharedLogging } from '@cli-coordinator/shared-logging';
import { app2UiCharts } from '@cli-coordinator/app2-ui-charts';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureMonitoringDeps = {
  app4DataAccess,
  app4UiCharts,
  sharedLogging,
  app2UiCharts,
};
