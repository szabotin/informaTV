import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {

  messagesLinks: any[] ;
  messageSubscription: Subscription ;

  constructor(private messService: MessagesService) { }

  ngOnInit() {
    this.messageSubscription = this.messService.messageSubject.subscribe(
      (messagesLinks: any[]) => {
        this.messagesLinks = messagesLinks ;
      }
    ) ;
    this.messService.emitMessageSubject() ;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }
}
