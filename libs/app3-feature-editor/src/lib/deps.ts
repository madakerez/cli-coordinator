import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';
import { app3UiToolbar } from '@cli-coordinator/app3-ui-toolbar';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureEditorDeps = {
  app3DataAccess,
  sharedUi,
  app3UiToolbar,
};
