import { sharedUtils } from '@cli-coordinator/shared-utils';
import { sharedModels } from '@cli-coordinator/shared-models';

// Re-export dependency references to establish NX dependency graph
export const app4UtilParsersDeps = {
  sharedUtils,
  sharedModels,
};
