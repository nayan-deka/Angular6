import { Component, Inject, ViewContainerRef } from '@angular/core';
import { Service } from './dynamic/service.loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='app';
  constructor(public service:Service,
    @Inject(ViewContainerRef) viewContainerRef) {
      service.setRootViewContainer(viewContainerRef)
      service.addDynamicComponent()
    }
}

