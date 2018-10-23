import { Component, ViewEncapsulation } from "@angular/core";

@Component ({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styles: [`
        h3 {
            text-decoration: underline;
        },
        h1 {
            color; blue;
        }
        .mycolor {
            background-color: lightgreen;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class BindingComponent {
    clicked:boolean = false
    titleStyle:string = "blue"
    buttonStatus:boolean = false


    items:any = [
        {name: 'Kendo UI'},
        {name: 'EXT JS'},
        {name: 'Angular JS'},
        {name: 'Ember JS'}
    ]

    public clickedItem:any = {name: ''}

    onItemClicked(item:any){
        this.clickedItem = item
        this.clicked= true
    }

    Save(event:any):void{
        alert("Ok.. Thanks")
        this.buttonStatus = true
    }
}