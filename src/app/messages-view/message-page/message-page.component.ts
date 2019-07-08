import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['../../../reset.scss', '../../app.component.scss', '../messages-view.component.scss', './message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout( 
        () => {
          resolve(date);
        }, 2000
      ) ;
    }
  )

  messages: any[] ;
  messageSubscription: Subscription ;

  constructor(private messService: MessagesService) { }

  ngOnInit() {
    this.messageSubscription = this.messService.messageSubject.subscribe(
      (messages: any[]) => {
        this.messages = messages ;
      }
    ) ;
    this.messService.emitMessageSubject() ;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }

}
