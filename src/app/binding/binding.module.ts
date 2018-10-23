import { NgModule } from "@angular/core";
import { BindingComponent } from "./binding.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NestedComponent } from "./nested.component";

@NgModule({
    imports: [FormsModule,CommonModule],
    declarations: [BindingComponent,NestedComponent],
    exports: [BindingComponent]
})
export class BindingModule{}