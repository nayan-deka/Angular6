import { Component } from '@angular/core';
import { MessageService } from '../intercom/services';

@Component({ 
    templateUrl: 'home.component.html' })
export class HomeComponent {
    // Sender component
    constructor(private messageService: MessageService) { }

    sendMsg(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage
            ('Message : Angular 6 now has Messaging system like MSMQ');
    }

    clearMsg(): void {
        // clear message
        this.messageService.clearMessage();
    }
}