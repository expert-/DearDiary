import {Component} from 'angular2/core';
import {LoginForm} from './loginForm';

@Component({
    selector: 'my-app',
    template: `
    <div class="top">
			<h1 id="title" class="hidden"><span id="logo">Dear Diary</span></h1>
		</div>
    <login-form></login-form>
    `,
    directives: [LoginForm]
    
})
export class MyApp { }
