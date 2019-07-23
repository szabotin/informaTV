import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['../../../reset.scss', './weather-page.component.scss']
})

export class WeatherPageComponent implements OnInit, OnDestroy {

  hMessage: string ;
  fMessage: string ;
  time: string ;
  index: number ;

  hfHeight = 'little' ;
  
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

    this.index = this.weatherService.getPageIndex() ;
    this.time = this.weatherPages[this.index].linkText ;

    this.hMessage = 'Weather' ;
    this.fMessage = 'You can see the weather for ' + this.time.toLowerCase() + '. Use the arrows to see another time forecast' ;
  }

  ngOnDestroy() {
    this.weatherPagesSubscription.unsubscribe()
  }

}
