import { sharedUtils } from '@cli-coordinator/shared-utils';
import { sharedI18n } from '@cli-coordinator/shared-i18n';

// Re-export dependency references to establish NX dependency graph
export const app1UtilDatesDeps = {
  sharedUtils,
  sharedI18n,
};
