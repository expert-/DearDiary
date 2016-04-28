import {Component} from 'angular2/core';
import {LoginForm} from './loginForm';

@Component({
    selector: 'diary-entry',
    template: `
    <div class="diary-entry-box">
    <form id="diaryEntryForm">
		<textarea id= "diary-entry-textarea" #textArea (keyup)= "resetTimer(textArea)" form="diaryEntryForm" rows=8></textarea>
        <br/>
        <button class="diary-entry-submit" (click)="pauseTimer()">Pause</button><input class="diary-entry-submit" type = submit value="That's all">
        </form>
	</div>
    `
})
export class DiaryEntry {

    public myTimer: any;     

    public resetTimer = function (rt: HTMLInputElement) {
        console.log("clear Timer")
        clearTimeout(this.myTimer);
        this.myTimer = setTimeout(() => {
            rt.value = null;
            console.log("clear textarea")
        }, 2000);
    }
    
    public pauseTimer = () => {
        clearTimeout(this.myTimer);
    }
}