import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BindingModule } from './binding/binding.module';
import { IOModule } from './input-output/inputoutput.module';
import { ViewChildModule } from './viewchilddemo/viewchild.module';
import { ProductService } from './di/product.service';
import { DIModule } from './di/di.module';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent, InvoiceComponent
  ],
  imports: [
    BrowserModule,FormsModule,BindingModule,IOModule,ViewChildModule,DIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
