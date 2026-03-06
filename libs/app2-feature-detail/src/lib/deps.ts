import { app2DataAccess } from '@cli-coordinator/app2-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';

// Re-export dependency references to establish NX dependency graph
export const app2FeatureDetailDeps = {
  app2DataAccess,
  sharedUi,
};
