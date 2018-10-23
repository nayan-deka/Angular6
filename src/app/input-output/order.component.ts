import { Input, Component } from "@angular/core";

@Component({
    selector: 'order-processor',
    template: `
    <h2 class="bg-primary">Stock Information</h2>
    <h2 class="text-danger container">
        Buying {{quantity}} shares of {{stockSymbol}}
    </h2>
    Company: <input type="text" [(ngModel)]="stockSymbol" />
    
    <sms-text [stock]="stockSymbol"></sms-text>
    `
})
export class OrderComponent {
    @Input()
    quantity: number
    @Input()
    stockSymbol:string
}