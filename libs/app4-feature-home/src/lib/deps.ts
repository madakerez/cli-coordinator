import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureHomeDeps = {
  app4DataAccess,
  sharedUi,
};
