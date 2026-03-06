import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedNotifications } from '@cli-coordinator/shared-notifications';
import { sharedEvents } from '@cli-coordinator/shared-events';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureAlertsDeps = {
  app4DataAccess,
  sharedNotifications,
  sharedEvents,
};
