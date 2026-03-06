import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureHomeDeps = {
  app1DataAccess,
  sharedUi,
};
