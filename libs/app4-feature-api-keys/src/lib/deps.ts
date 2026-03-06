import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedAuth } from '@cli-coordinator/shared-auth';
import { sharedCrypto } from '@cli-coordinator/shared-crypto';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureApiKeysDeps = {
  app4DataAccess,
  sharedAuth,
  sharedCrypto,
};
