import { sharedCrypto } from '@cli-coordinator/shared-crypto';

// Re-export dependency references to establish NX dependency graph
export const app4UtilCryptoDeps = {
  sharedCrypto,
};
