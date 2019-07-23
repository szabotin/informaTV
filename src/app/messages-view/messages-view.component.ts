import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from '../services/messages.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['../../reset.scss', './messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit, OnDestroy {

  hMessage = 'Messages' ;
  fMessage = 'Choose the person you want to see the messages with' ;
  hfHeight = 'big' ;

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

