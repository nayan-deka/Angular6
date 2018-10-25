import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//chat server
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
        // Live data from websocket or ajax
        //conditional updates
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }
   // subscribers will call this method
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}