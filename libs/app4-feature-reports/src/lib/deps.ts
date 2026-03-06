import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';
import { app1DataAccess } from '@cli-coordinator/app1-data-access';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureReportsDeps = {
  app4DataAccess,
  app4UiCharts,
  app1DataAccess,
};
