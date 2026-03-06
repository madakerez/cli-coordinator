import { app4DataAccess } from '@cli-coordinator/app4-data-access';
import { sharedUi } from '@cli-coordinator/shared-ui';
import { app3FeatureTemplates } from '@cli-coordinator/app3-feature-templates';

// Re-export dependency references to establish NX dependency graph
export const app4FeatureTemplatesDeps = {
  app4DataAccess,
  sharedUi,
  app3FeatureTemplates,
};
