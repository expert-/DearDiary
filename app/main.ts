import {bootstrap}    from 'angular2/platform/browser';
import {MyApp} from './components/myApp';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(MyApp, [
  ROUTER_PROVIDERS
  ]);
