import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from 'src/app/services/messages.services';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['../../../reset.scss', './messages-page.component.scss']
})

export class MessagesPageComponent implements OnInit, OnDestroy {
  
  hMessage = 'Messages with ' ;
  fMessage = 'Here are your messages with ... Use the arrows to see others messages' ;
  hfHeight = 'little' ;

  messPages: any[] ;
  messPagesSubscription: Subscription ;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {

    this.messPagesSubscription = this.messagesService.messPagesSubject.subscribe(
      (messPages: any[]) => {
        this.messPages = messPages ;
      }
    ) ;

    this.messagesService.emitMessageSubject() ;
  }

  ngOnDestroy() {
    this.messPagesSubscription.unsubscribe() ;
  }
}