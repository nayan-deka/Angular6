import { Component, Inject, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Service } from './dynamic/service.loader';
import { Subscription } from "rxjs";
import { MessageService } from "./intercom/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title ='app';
  message: any
  subscription: Subscription
  // constructor(public service:Service,
  //   @Inject(ViewContainerRef) viewContainerRef) {
  //     service.setRootViewContainer(viewContainerRef)
  //     service.addDynamicComponent()
  //   }

  constructor(private messageService: MessageService) {
    console.log("I am notifier")
  }

  ngOnInit() {
    this.subscription = 
        this.messageService.getMessage().subscribe(
            (message: any) => { this.message = message}
        )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}

