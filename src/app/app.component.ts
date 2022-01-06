import { Component } from '@angular/core';
declare function slide(): void;
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'GamerMania';
  
  // myScriptElement: HTMLScriptElement;
  // constructor(){
  //   slide();
  //   this.myScriptElement = document.createElement("script");
  //   this.myScriptElement.scr ="......";
  //   document.body.appendChild(this.myScriptElement);
  // }
}
