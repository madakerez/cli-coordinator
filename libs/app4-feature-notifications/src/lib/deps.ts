import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedNotifications } from '@cli-coordinator/shared-notifications';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureNotificationsDeps = {
  app4DataAccess,
  sharedNotifications,
};
