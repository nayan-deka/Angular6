import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HiddenDirective } from "./hidden.directive";
import { TestComponent } from "./test.component";
import { HoverFocusDirective } from "./hoverfocus.directive";
import { TemperaturePipe } from "./temperature.pipe";

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [HiddenDirective,TestComponent,HoverFocusDirective,TemperaturePipe],
    exports: [HiddenDirective,TestComponent, HoverFocusDirective, TemperaturePipe] 
})
export class SharedModule {}