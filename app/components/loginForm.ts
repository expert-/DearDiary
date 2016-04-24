import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DiaryEntry}   from './diaryEntry';

@Component({
    selector: 'login-form',
    template: `
    <div class="login-box animated fadeInUp">
			<div class="box-header">
				<h2>Log In</h2>
			</div>
			<label for="username">Username</label>
			<br/>
			<input type="text" id="username">
			<br/>
			<label for="password">Password</label>
			<br/>
			<input type="password" id="password">
			<br/>
			<a [routerLink]="['DiaryEntry']"><button type="submit">Sign In</button></a>
			<br/>
			<a href="#"><p class="small">Forgot your password?</p></a>
		</div>
    `,
	directives: [ROUTER_DIRECTIVES]
})
export class LoginForm { }