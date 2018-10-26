import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { WeatherComponent } from './http2angular/weather.component';
import { HomeComponent } from './home/home.component';
import { NotifyComponent } from './notify.component';
import { routing } from './app.routing';
import { SharedModule } from './shared/share.module';



@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent, InvoiceComponent, 
    CompLifeCycleComponent,ChildComponent,DynamicComponent,HTTPComponent,
    WeatherComponent,HomeComponent,NotifyComponent
  ],
  imports: [
    BrowserModule,FormsModule,BindingModule,
    IOModule,ViewChildModule,DIModule,ContactModule,
    HttpClientModule, ReactiveFormsModule, routing,SharedModule
  ],
  providers: [Service],
  entryComponents: [DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
