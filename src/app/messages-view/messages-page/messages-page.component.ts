import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from 'src/app/services/messages.services';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['../../../reset.scss', './messages-page.component.scss']
})

export class MessagesPageComponent implements OnInit, OnDestroy {
  
  hMessage: string ;
  fMessage: string ;
  name: string ;
  index: number ;

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
    
    this.index = this.messagesService.getPageIndex() ;
    this.name = this.messPages[this.index].name ;

    this.hMessage = 'Messages with ' + this.name ;
    this.fMessage = 'Here are your messages with ' + this.name + '. Use the arrows to see others messages' ;
  }

  ngOnDestroy() {
    this.messPagesSubscription.unsubscribe() ;
  }
}