import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs/Subscription';
import { PagesService } from 'src/app/services/pages.service';

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
  
  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  messages: any[] ;
  messageSubscription: Subscription ;

  constructor(private pagesService: PagesService, private messService: MessagesService) { }

  ngOnInit() {

    this.messageSubscription = this.messService.messageSubject.subscribe(
      (messages: any[]) => {
        this.messages = messages ;
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

    this.indexPage = this.pagesService.getIndexOfPageByLink('message-page', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe()
  }
}
