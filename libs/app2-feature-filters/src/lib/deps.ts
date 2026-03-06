import { app2DataAccess } from '@cli-coordinator/app2-data-access';
import { app2UiComponents } from '@cli-coordinator/app2-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app2FeatureFiltersDeps = {
  app2DataAccess,
  app2UiComponents,
};
