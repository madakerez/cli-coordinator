import { sharedUi } from '@cli-coordinator/shared-ui';
import { app1UiLayout } from '@cli-coordinator/app1-ui-layout';

// Re-export dependency references to establish NX dependency graph
export const app1UiNavigationDeps = {
  sharedUi,
  app1UiLayout,
};
