import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-reminders-page',
  templateUrl: './reminders-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './reminders-page.component.scss']
})
export class RemindersPageComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;
  
  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;

    this.pagesService.emitPageSubject() ;

    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByTitle('Reminders', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

}
