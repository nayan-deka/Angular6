import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ViewChildComponent } from "./viewchild.component";
import { ViewChildParentComponent } from "./viewchildparent.component";

@NgModule({
    imports: [FormsModule,CommonModule],
    declarations: [ViewChildComponent, ViewChildParentComponent],
    exports: [ViewChildParentComponent]
})

export class ViewChildModule {}