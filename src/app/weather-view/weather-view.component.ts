import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['../../reset.scss', './weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit, OnDestroy {

  weatherLinkSerieIndex = 0 ;

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
		return this.weatherLinkSerieIndex == 0 ;
	}
	isLastPage() {
		return this.weatherLinkSerieIndex >= this.weatherPages.length - 1 ;
	}

	onClickLeft() {
		if (this.weatherLinkSerieIndex > 0)
			this.weatherLinkSerieIndex-- ;
	}
	onClickRight() {
		if (this.weatherLinkSerieIndex < this.weatherPages.length)
			this.weatherLinkSerieIndex++ ;
	}
}
