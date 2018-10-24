import { NgModule } from "@angular/core";
import { ContactListComponent } from "./contact/contactlist.component";
import { ContactDetailsComponent } from "./contact/contactdetails.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ContactListComponent,ContactDetailsComponent],
    imports: [CommonModule,FormsModule],
    exports: [ContactListComponent]
})
export class ContactModule{}