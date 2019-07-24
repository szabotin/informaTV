import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['../../reset.scss', './weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit, OnDestroy {

  serieIndex = 0 ;

  hMessage = 'Weather' ;
  fMessage = 'Choose which time you want to see the forecast' ;
  hfHeight = 'big' ;

  weatherPages: any[] ;
  weatherPagesSubscription: Subscription ;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.weatherPagesSubscription = this.weatherService.weatherPagesSubject.subscribe(
      (weathPages: any[]) => {
        this.weatherPages = weathPages ;
      }
    ) ;

    this.weatherService.emitWeatherSubject() ;
   
  }

  ngOnDestroy() {
    this.weatherPagesSubscription.unsubscribe() ;
  }

  isFirstPage() {
		return this.serieIndex == 0 ;
	}
	isLastPage() {
		return this.serieIndex >= this.weatherPages.length - 1 ;
	}

	onClickLeft() {
		if (this.serieIndex > 0)
			this.serieIndex-- ;
	}
	onClickRight() {
		if (this.serieIndex < this.weatherPages.length)
			this.serieIndex++ ;
	}
}
