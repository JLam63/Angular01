import { Component } from "@angular/core";

@Component({
  selector: "page-Title",
  // template: `<h1>Hello</h1>
  //             <div>First Name: {{firstName}}</div><br />
  //             <div>Last Name: {{lastName}}</div><br />
  //             <div><login></login></div>`
  templateUrl: './app.component.html'

})
export class AppComponent {
    pageTitle: "Hello World";
    firstName:string = "John";
    lastName:string = "Lam";
    products:any[] = [
       {"ProductID":123, "ProductName":"Drone", "Price": 123},
       {"ProductID":456, "ProductName":"Car", "Price": 30000},
       {"ProductID":789, "ProductName":"House", "Price": 500000}
    ];


    public getTitle():string{
      return "TITLE"
    }


}