import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedLogging } from '@cli-coordinator/shared-logging';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureAuditDeps = {
  app1DataAccess,
  sharedLogging,
};
