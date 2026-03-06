import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';
import { app1UiForms } from '@cli-coordinator/app1-ui-forms';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureTasksDeps = {
  app1DataAccess,
  sharedUi,
  app1UiForms,
};
