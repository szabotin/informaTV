import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['../../../reset.scss', '../../app.component.scss', './message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  // Example of Promise if we have to code it
  
  // lastUpdate = new Promise(
    // (resolve, reject) => {
      // const date = new Date() ;
      // setTimeout( 
        // () => {
          // resolve(date) ;
        // }, 2000
      // ) ;
    // }
  // )

  // indexByName: number ;
  
  messages: any[] ;
  messageSubscription: Subscription ;
  indexPage: number ;

  constructor(private messService: MessagesService) { }

  ngOnInit() {
    this.indexPage = 0 ;
    
    this.messageSubscription = this.messService.messageSubject.subscribe(
      (messages: any[]) => {
        this.messages = messages ;
        // name = 
        // this.indexByName = this.messages.findIndex(name) ;
      }
    ) ;
    this.messService.emitMessageSubject() ;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }
}
