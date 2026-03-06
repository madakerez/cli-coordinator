import { sharedUi } from '@cli-coordinator/shared-ui';
import { app1UtilValidators } from '@cli-coordinator/app1-util-validators';

// Re-export dependency references to establish NX dependency graph
export const app1UiFormsDeps = {
  sharedUi,
  app1UtilValidators,
};
