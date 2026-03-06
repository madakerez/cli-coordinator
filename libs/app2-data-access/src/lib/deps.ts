import { sharedConfig } from '@cli-coordinator/shared-config';

// Re-export dependency references to establish NX dependency graph
export const app2DataAccessDeps = {
  sharedConfig,
};
