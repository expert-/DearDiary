import {Component} from 'angular2/core';
import {LoginForm} from './loginForm';

@Component({
    selector: 'diary-entry',
    template: `
    <div class="diary-entry-box">
    <form id="diaryEntryForm">
		<textarea id= "diary-entry-textarea" #textArea (focus)="startTimer(textArea)" (keyup)= "resetTimer(textArea)" form="diaryEntryForm" placeholder= "hi ..." rows=8></textarea>
        <br/>
        <input id="diary-entry-submit" type = submit value="That's all">
        </form>
	</div>
    `
})
export class DiaryEntry {

    myTimer: any;

    startTimer(st: HTMLInputElement) {
        this.myTimer = setInterval(this.myTimerFunction(st), 2000);        
    }   
myTimerFunction(st: HTMLInputElement) {
        st.value = null;
        console.log("clear textarea")
    }
    
    resetTimer(rt: HTMLInputElement) {
        // this.stuff.push(st.value);
        console.log("clear Timer")
        clearInterval(this.myTimer);
        this.myTimer = setInterval(this.myTimerFunction(rt), 2000); 
    }
}