import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedPermissions } from '@cli-coordinator/shared-permissions';
import { sharedLogging } from '@cli-coordinator/shared-logging';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureComplianceDeps = {
  app4DataAccess,
  sharedPermissions,
  sharedLogging,
};
