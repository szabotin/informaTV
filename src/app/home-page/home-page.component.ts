import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HomeService } from '../services/home.service';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../../reset.scss', './home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  links: any[] ;
  linkSubscription: Subscription ;

  constructor(private pagesService: PagesService, private homeService: HomeService) { }

  ngOnInit() {
    this.linkSubscription = this.homeService.linkSubject.subscribe(
      (links: any[]) => {
        this.links = links ;
      }
    ) ;
    
    this.homeService.emitLinkSubject() ;

    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;

    this.pagesService.emitPageSubject() ;

    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByTitle('Home', this.pages) ;

    // get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

  ngOnDestroy() {
    this.linkSubscription.unsubscribe()
  }

}
