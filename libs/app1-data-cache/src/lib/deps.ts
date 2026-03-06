import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedCache } from '@cli-coordinator/shared-cache';

// Re-export dependency references to establish NX dependency graph
export const app1DataCacheDeps = {
  app1DataAccess,
  sharedCache,
};
