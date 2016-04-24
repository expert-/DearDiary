import {Component} from 'angular2/core';
import {LoginForm} from './loginForm';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DiaryEntry}   from './diaryEntry';

@Component({
    selector: 'my-app',
    template: `
    <div class="top">
			<h1 id="title" class="hidden"><span id="logo" >Dear Diary,</span></h1>
	</div>
    <router-outlet></router-outlet>    
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
    
})
@RouteConfig([
  {path:'/', name: 'LoginForm', component: LoginForm, useAsDefault: true},
  {path:'/diary-entry', name: 'DiaryEntry', component: DiaryEntry}
])
export class MyApp { }
