import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    template: `
        <h1 class="container bg-warning text-center">{{message}}</h1>       
    `
})
export class HeaderComponent {
    message:string = "SPA with Angular 6"
}