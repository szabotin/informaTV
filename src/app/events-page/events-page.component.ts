import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  imageLink = 'assets/events/aoife.jpg' ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  constructor(private pagesService: PagesService) { 
  }

  ngOnInit() {  
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;

    this.pagesService.emitPageSubject() ;


    this.indexPage = this.pagesService.getIndexOfPageByTitle('Events', this.pages) ;

    // get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

}
