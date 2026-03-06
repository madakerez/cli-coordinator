import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedLogging } from '@cli-coordinator/shared-logging';
import { app1FeatureAudit } from '@cli-coordinator/app1-feature-audit';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureAuditDeps = {
  app4DataAccess,
  sharedLogging,
  app1FeatureAudit,
};
