import { sharedUi } from '@cli-coordinator/shared-ui';
import { app3UiComponents } from '@cli-coordinator/app3-ui-components';

// Re-export dependency references to establish NX dependency graph
export const app3UiFormsDeps = {
  sharedUi,
  app3UiComponents,
};
