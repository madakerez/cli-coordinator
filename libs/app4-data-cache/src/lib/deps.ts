import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedCache } from '@cli-coordinator/shared-cache';

// Re-export dependency references to establish NX dependency graph
export const app4DataCacheDeps = {
  app4DataAccess,
  sharedCache,
};
