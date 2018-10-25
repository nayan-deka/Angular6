import { OnInit, OnDestroy, Component } from "@angular/core";
import { Subscription } from "rxjs";
import { MessageService } from "./intercom/services";

@Component({
    selector:'app-notify',
    template:`
    <div class="jumbotron">
    <div class="container text-center bg-primary">
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
             <h3>I am Notifier component</h3>
                <div *ngIf="message" class="alert alert-success">
                {{message.text}}</div>
            </div>
        </div>
    </div>
</div>
    `
})
export class NotifyComponent implements OnInit, OnDestroy {
    message: any
    subscription: Subscription

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