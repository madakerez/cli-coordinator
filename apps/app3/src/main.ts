import '@cli-coordinator/shared-config';
import '@cli-coordinator/shared-models';
import '@cli-coordinator/shared-utils';
import '@cli-coordinator/shared-ui';
import '@cli-coordinator/shared-http';
import '@cli-coordinator/app3-data-access';
import '@cli-coordinator/app3-feature-home';
import '@cli-coordinator/app3-feature-editor';
import '@cli-coordinator/app3-feature-preview';
import '@cli-coordinator/app3-feature-history';
import '@cli-coordinator/app3-feature-collaboration';
import '@cli-coordinator/app3-ui-components';
import '@cli-coordinator/app3-ui-layout';
import '@cli-coordinator/app3-ui-toolbar';
import '@cli-coordinator/app3-util-validators';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
