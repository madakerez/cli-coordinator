import { sharedUi } from '@cli-coordinator/shared-ui';
import { sharedUtils } from '@cli-coordinator/shared-utils';

// Re-export dependency references to establish NX dependency graph
export const app4UiChartsDeps = {
  sharedUi,
  sharedUtils,
};
