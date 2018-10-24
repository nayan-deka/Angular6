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
import { CompLifeCycleComponent, ChildComponent } from './lifecycle/Complifecycle.component';
import { ContactModule } from './multicomp/multicomp.module';
import { Service } from './dynamic/service.loader';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HttpClientModule } from '@angular/common/http'
import { HTTPComponent } from './http2angular/http.component';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent, InvoiceComponent, 
    CompLifeCycleComponent,ChildComponent,DynamicComponent,HTTPComponent
  ],
  imports: [
    BrowserModule,FormsModule,BindingModule,
    IOModule,ViewChildModule,DIModule,ContactModule,
    HttpClientModule
  ],
  providers: [Service],
  entryComponents: [DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
