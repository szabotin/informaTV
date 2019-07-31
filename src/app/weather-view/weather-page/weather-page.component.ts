import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-weather-page',
	templateUrl: './weather-page.component.html',
	styleUrls: ['../../../reset.scss', './weather-page.component.scss']
})

export class WeatherPageComponent implements OnInit, OnDestroy {

	weatherPageIndex = 0 ;
	
	weatherLinkSerieIndex: number ;
	weatherLinkIndex: number ;

	hMessage: string ;
	fMessage: string ;
	time: string ;

	hfHeight = 'little' ;
	
	weatherPages: any[] ;
	weatherPagesSubscription: Subscription ;

	constructor(private weatherService: WeatherService) { }

	ngOnInit() {

		this.weatherPagesSubscription = this.weatherService.weatherPagesSubject.subscribe(
			(weatherPages: any[]) => {
				this.weatherPages = weatherPages ;
			}
		) ;
		this.weatherService.emitWeatherSubject() ;

		this.weatherLinkSerieIndex = this.weatherService.getWeatherLinkSerieIndex() ;
		this.weatherLinkIndex = this.weatherService.getWeatherLinkIndex() ;
		this.time = this.weatherPages[this.weatherLinkSerieIndex][this.weatherLinkIndex].linkText ;

		this.hMessage = 'Weather for ' + this.time.toLowerCase() ;
		this.fMessage = 'You can see the weather for ' + this.time.toLowerCase() + '. Use the arrows to see another time forecast' ;

		this.weatherPageIndex = this.weatherService.getWeatherPageIndex() ;
	}

	ngOnDestroy() {
		this.weatherPagesSubscription.unsubscribe() ;
	}

	isFirstPage() {
		return this.weatherPageIndex == 0 ;
	}
	isLastPage() {
		return this.weatherPageIndex >= this.weatherPages[this.weatherLinkSerieIndex][this.weatherLinkIndex].page.length - 1 ;
	}

	onClickLeft() {
		if (this.weatherPageIndex > 0)
			this.weatherPageIndex-- ;
	}
	onClickRight() {
		if (this.weatherPageIndex < this.weatherPages[this.weatherLinkSerieIndex][this.weatherLinkIndex].page.length)
			this.weatherPageIndex++ ;
	}
}
