import { sharedUi } from '@cli-coordinator/shared-ui';
import { app2UiComponents } from '@cli-coordinator/app2-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app2UiLayoutDeps = {
  sharedUi,
  app2UiComponents,
};
