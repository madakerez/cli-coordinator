import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';
import { sharedLogging } from '@cli-coordinator/shared-logging';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureMonitoringDeps = {
  app4DataAccess,
  app4UiCharts,
  sharedLogging,
};
