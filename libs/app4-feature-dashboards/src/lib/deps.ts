import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { app4UiCharts } from '@cli-coordinator/app4-ui-charts';
import { sharedUi } from '@cli-coordinator/shared-ui';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureDashboardsDeps = {
  app4DataAccess,
  app4UiCharts,
  sharedUi,
};
