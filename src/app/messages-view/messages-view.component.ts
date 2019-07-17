import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from '../services/messages.service';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  messagesLinks: any[] ;
  messageSubscription: Subscription ;

  constructor(private pagesService: PagesService, private messService: MessagesService) { }

  ngOnInit() {
    this.messageSubscription = this.messService.messageSubject.subscribe(
      (messagesLinks: any[]) => {
        this.messagesLinks = messagesLinks ;
      }
    ) ;
    this.messService.emitMessageSubject() ;

    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;

    this.pagesService.emitPageSubject() ;

    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByLink('messages-view', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }
}
