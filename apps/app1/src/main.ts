import '@cli-coordinator/shared-config';
import '@cli-coordinator/shared-models';
import '@cli-coordinator/shared-utils';
import '@cli-coordinator/shared-ui';
import '@cli-coordinator/shared-auth';
import '@cli-coordinator/shared-http';
import '@cli-coordinator/shared-logging';
import '@cli-coordinator/app1-data-access';
import '@cli-coordinator/app1-feature-home';
import '@cli-coordinator/app1-feature-profile';
import '@cli-coordinator/app1-feature-settings';
import '@cli-coordinator/app1-feature-dashboard';
import '@cli-coordinator/app1-feature-notifications';
import '@cli-coordinator/app1-ui-components';
import '@cli-coordinator/app1-ui-layout';
import '@cli-coordinator/app1-ui-forms';
import '@cli-coordinator/app1-util-validators';
import '@cli-coordinator/app1-util-formatters';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
