import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';
import { app1UiComponents } from '@cli-coordinator/app1-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureDashboardDeps = {
  app1DataAccess,
  sharedUi,
  app1UiComponents,
};
