import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedCrypto } from '@cli-coordinator/shared-crypto';
import { sharedPermissions } from '@cli-coordinator/shared-permissions';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureBillingDeps = {
  app1DataAccess,
  sharedCrypto,
  sharedPermissions,
};
