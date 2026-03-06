import '@cli-coordinator/shared-config';
import '@cli-coordinator/shared-models';
import '@cli-coordinator/shared-utils';
import '@cli-coordinator/shared-ui';
import '@cli-coordinator/shared-auth';
import '@cli-coordinator/shared-http';
import '@cli-coordinator/shared-logging';
import '@cli-coordinator/app4-data-access';
import '@cli-coordinator/app4-feature-home';
import '@cli-coordinator/app4-feature-reports';
import '@cli-coordinator/app4-feature-admin';
import '@cli-coordinator/app4-feature-monitoring';
import '@cli-coordinator/app4-feature-export';
import '@cli-coordinator/app4-ui-components';
import '@cli-coordinator/app4-ui-layout';
import '@cli-coordinator/app4-ui-charts';
import '@cli-coordinator/app4-util-validators';
import '@cli-coordinator/app4-util-parsers';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
