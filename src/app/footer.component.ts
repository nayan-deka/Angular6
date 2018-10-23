import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    template: `
        <h3>{{message}}</h3>       
    `
})
export class FooterComponent {
    message:string = "CopyRight reserved to Murthy"
}