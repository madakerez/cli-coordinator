import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedMetrics } from '@cli-coordinator/shared-metrics';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';

// Re-export dependency references to establish NX dependency graph
export const app4DataAggregatorDeps = {
  app4DataAccess,
  sharedMetrics,
  app4UiCharts,
};
