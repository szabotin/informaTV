import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-weather-page',
	templateUrl: './weather-page.component.html',
	styleUrls: ['../../../reset.scss', './weather-page.component.scss']
})

export class WeatherPageComponent implements OnInit, OnDestroy {

	pageIndex: number ;
	serieIndex: number ;

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

		this.serieIndex = this.weatherService.getSerieIndex() ;
		this.pageIndex = this.weatherService.getPageIndex() ;
		this.time = this.weatherPages[this.serieIndex][this.pageIndex].linkText ;

		this.hMessage = 'Weather for ' + this.time.toLowerCase() ;
		this.fMessage = 'You can see the weather for ' + this.time.toLowerCase() + '. Use the arrows to see another time forecast' ;
	}

	ngOnDestroy() {
		this.weatherPagesSubscription.unsubscribe()
	}
}
