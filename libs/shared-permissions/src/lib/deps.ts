import { sharedAuth } from '@cli-coordinator/shared-auth';
import { sharedModels } from '@cli-coordinator/shared-models';

// Re-export dependency references to establish NX dependency graph
export const sharedPermissionsDeps = {
  sharedAuth,
  sharedModels,
};
