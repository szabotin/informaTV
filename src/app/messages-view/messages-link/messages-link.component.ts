import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.services';

@Component({
  selector: 'app-messages-link',
  templateUrl: './messages-link.component.html',
  styleUrls: ['../../../reset.scss', './messages-link.component.scss']
})

export class MessagesLinkComponent implements OnInit, OnDestroy {

  @Input() name : string ;
  @Input() photoPath : string ;
  @Input() indexLink : number ;

  messPages: any[] ;
  messageSubscription: Subscription ;

  constructor(private messService: MessagesService, private router: Router ) { 
  }

  ngOnInit() { 
    this.messageSubscription = this.messService.messPagesSubject.subscribe(
      (messPages: any[]) => {
        this.messPages = messPages ;
      }
    ) ;
    this.messService.emitMessageSubject() ; 
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe() ;
  }

  onClic() {
    this.router.navigate(['messages-page']) ;
  }

}

