import { app3DataAccess } from '@cli-coordinator/app3-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';

// Re-export dependency references to establish NX dependency graph
export const app3FeatureHistoryDeps = {
  app3DataAccess,
  sharedUi,
};
