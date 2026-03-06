import { app1DataAccess } from '@cli-coordinator/app1-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';
import { sharedI18n } from '@cli-coordinator/shared-i18n';

// Re-export dependency references to establish NX dependency graph
export const app1FeatureCalendarDeps = {
  app1DataAccess,
  sharedUi,
  sharedI18n,
};
