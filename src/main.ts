import 'zone.js/dist/zone';

import * as $ from 'jquery';
import 'bootstrap';
import './assets/styles/main.scss';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule( AppModule );

