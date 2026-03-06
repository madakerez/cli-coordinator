import { sharedUi } from '@cli-coordinator/shared-ui';
import { app4UiComponents } from '@cli-coordinator/app4-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app4UiPanelsDeps = {
  sharedUi,
  app4UiComponents,
};
