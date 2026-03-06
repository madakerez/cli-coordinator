import { sharedHttp } from '@cli-coordinator/shared-http';
import { sharedModels } from '@cli-coordinator/shared-models';

// Re-export dependency references to establish NX dependency graph
export const app4DataAccessDeps = {
  sharedHttp,
  sharedModels,
};
