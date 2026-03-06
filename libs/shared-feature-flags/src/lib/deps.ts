import { sharedConfig } from '@cli-coordinator/shared-config';
import { sharedHttp } from '@cli-coordinator/shared-http';

// Re-export dependency references to establish NX dependency graph
export const sharedFeatureFlagsDeps = {
  sharedConfig,
  sharedHttp,
};
