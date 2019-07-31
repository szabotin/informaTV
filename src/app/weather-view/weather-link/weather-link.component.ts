import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-weather-link',
	templateUrl: './weather-link.component.html',
	styleUrls: ['./weather-link.component.scss']
	})

export class WeatherLinkComponent {
  
	@Input() weatherLinkSerieIndex: number ;
	@Input() weatherLinkIndex: number ;
	@Input() weatherPageIndex: number ;
	@Input() text : string ;
	
	constructor(private weatherService: WeatherService, private router: Router) { }

	onClic() {
		this.weatherService.setWeatherLinkSerieIndex(this.weatherLinkSerieIndex) ;
		this.weatherService.setWeatherLinkIndex(this.weatherLinkIndex) ;
		this.weatherService.setWeatherPageIndex(0) ;
		this.router.navigate(['weather-page']) ;
	}
}
