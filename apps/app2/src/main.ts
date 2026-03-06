import '@cli-coordinator/shared-config';
import '@cli-coordinator/app2-data-access';
import '@cli-coordinator/app2-feature-home';
import '@cli-coordinator/app2-ui-components';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
