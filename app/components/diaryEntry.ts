import {Component} from 'angular2/core';
import {LoginForm} from './loginForm';

@Component({
    selector: 'diary-entry',
    template: `
    <div class="diary-entry-box">
    <form id="diaryEntryForm">
		<textarea id= "diary-entry-textarea" form="diaryEntryForm" placeholder= "hi ..." rows=8></textarea>
        <br/>
        <input id="diary-entry-submit" type = submit value="That's all">
        </form>
	</div>
    `
})
export class DiaryEntry { }