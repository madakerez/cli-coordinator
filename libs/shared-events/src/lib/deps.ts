import { sharedConfig } from '@cli-coordinator/shared-config';
import { sharedModels } from '@cli-coordinator/shared-models';

// Re-export dependency references to establish NX dependency graph
export const sharedEventsDeps = {
  sharedConfig,
  sharedModels,
};
