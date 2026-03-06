import { sharedUi } from '@cli-coordinator/shared-ui';
import { app4UiLayout } from '@cli-coordinator/app4-ui-layout';

// Re-export dependency references to establish NX dependency graph
export const app4UiNavigationDeps = {
  sharedUi,
  app4UiLayout,
};
