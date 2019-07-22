import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['../../../reset.scss', './weather-page.component.scss']
})

export class WeatherPageComponent implements OnInit, OnDestroy {

  hfHeight: string ;
  hMessage: string ;
  fMessage: string ;

  pages: any[] ;
  indexPage: number ;
  pagesSubscription: Subscription ;

  weatherPages: any[] ;
  weatherPagesSubscription: Subscription ;

  constructor(private weatherService:  WeatherService) {
  }

  ngOnInit() {

    this.weatherPagesSubscription = this.weatherService.weatherPagesSubject.subscribe(
      (weatherPages: any[]) => {
        this.weatherPages = weatherPages ;
      }
    ) ;

    this.weatherService.emitWeatherSubject() ;

    /*
    // Get the indexPage from the title page 
    // Be carful -> refer to the title page in pages.service.ts

    this.indexPage = this.pagesService.getIndexOfPageByTitle('Weather', this.pages) ;

    // Get the title of the page, the height of the header and footer, and the footer message from the tab "pages" */

    this.hMessage = 'Weather' ;
    this.fMessage = 'You can see the weather for ...' ;
    this.hfHeight = 'little' ;
  }

  ngOnDestroy() {
    this.weatherPagesSubscription.unsubscribe()
  }

}
