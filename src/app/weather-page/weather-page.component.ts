import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Subscription } from 'rxjs/Subscription';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  boxContent: any[] ;
  boxContentSubscription: Subscription ;

  constructor(private pagesService: PagesService, private weatherService:  WeatherService) {
  }

  ngOnInit() {

    // Subscriptions

    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;
    this.pagesService.emitPageSubject() ;

    this.boxContentSubscription = this.weatherService.boxContentSubject.subscribe(
      (boxContent: any[]) => {
        this.boxContent = boxContent ;
      }
    ) ;
    this.weatherService.emitBoxContentSubject() ;

    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByTitle('Weather', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages"

    this.hfHeight = this.pages[this.indexPage]['headerAndFooterHeight'] ;
    this.hMessage = this.pages[this.indexPage]['title'] ;
    this.fMessage = this.pages[this.indexPage]['footerMessage'] ;
  }

  ngOnDestroy() {
    this.boxContentSubscription.unsubscribe()
  }

}
