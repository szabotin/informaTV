import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from '../services/messages.services';
// import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['../../reset.scss', './messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  messPages: any[] ;
  messPagesSubscription: Subscription ;
  // indexPage: number ;

  // messagesLinks: any[] ;
  // messageSubscription: Subscription ;

  constructor(/* private pagesService: PagesService,*/ private messagesService: MessagesService) { }

  ngOnInit() {
    this.messPagesSubscription = this.messagesService.messPagesSubject.subscribe(
      (messPages: any[]) => {
        this.messPages = messPages ;
      }
    ) ;
    this.messagesService.emitMessageSubject() ;
/*
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;

    this.pagesService.emitPageSubject() ;

    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByLink('messages-view', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages" */

    this.hMessage = 'Messages' ;
    this.fMessage = 'Choose the person you want to see the messages with' ;
    this.hfHeight = 'big' ;
   }

  /* ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  } */
}

