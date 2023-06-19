import { Component } from "@angular/core";

@Component({
  selector: 'pm-root' ,
  template: `
  <div><h1>{{pageTitle}}</h1></div> 
  `
})

export class AppComponent{
  pageTitle: string = 'Tommy learning Angular'
}

//////