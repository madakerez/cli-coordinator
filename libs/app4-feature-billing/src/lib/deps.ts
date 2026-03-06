import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedCrypto } from '@cli-coordinator/shared-crypto';
import { app1FeatureBilling } from '@cli-coordinator/app1-feature-billing';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureBillingDeps = {
  app4DataAccess,
  sharedCrypto,
  app1FeatureBilling,
};
