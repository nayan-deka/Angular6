
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StockComponent } from "./inputbinding";
import { SMSComponent } from "./smscomponent";
import { TimerComponent } from "./timer.component";
import { OrderComponent } from "./order.component";
import { PriceQuoterComponent, OutputComponent, MailComponent } from "./output.binding";

@NgModule({
    imports: [FormsModule,CommonModule],
    declarations: [
        StockComponent,
        OrderComponent,
        SMSComponent,
        TimerComponent,

        PriceQuoterComponent,
        OutputComponent,
        MailComponent
    ],
    exports: [StockComponent,OutputComponent]
})
export class IOModule{}