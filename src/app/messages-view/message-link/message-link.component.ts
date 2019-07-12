import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message-link',
  templateUrl: './message-link.component.html',
  styleUrls: ['../../../reset.scss', './message-link.component.scss']
})

export class MessageLinkComponent implements OnInit, OnDestroy {

  @Input() name : string ;
  @Input() photoPath : string ;
  @Input() indexLink : number ;

  messages: any[] ;
  messageSubscription: Subscription ;

  constructor(private messService: MessagesService, private router: Router) { }

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

  navigatePageMessage() {
    this.router.navigate(['messages-page']) ;
  }

}
