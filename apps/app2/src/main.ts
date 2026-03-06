import '@cli-coordinator/shared-config';
import '@cli-coordinator/shared-models';
import '@cli-coordinator/shared-utils';
import '@cli-coordinator/shared-ui';
import '@cli-coordinator/shared-auth';
import '@cli-coordinator/shared-http';
import '@cli-coordinator/shared-logging';
import '@cli-coordinator/app2-data-access';
import '@cli-coordinator/app2-feature-home';
import '@cli-coordinator/app2-feature-search';
import '@cli-coordinator/app2-feature-detail';
import '@cli-coordinator/app2-feature-favorites';
import '@cli-coordinator/app2-feature-analytics';
import '@cli-coordinator/app2-ui-components';
import '@cli-coordinator/app2-ui-layout';
import '@cli-coordinator/app2-ui-charts';
import '@cli-coordinator/app2-util-validators';
import '@cli-coordinator/app2-util-transforms';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
