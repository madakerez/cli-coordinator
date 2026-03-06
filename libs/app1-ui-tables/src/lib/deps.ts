import { sharedUi } from '@cli-coordinator/shared-ui';
import { app1UiComponents } from '@cli-coordinator/app1-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app1UiTablesDeps = {
  sharedUi,
  app1UiComponents,
};
