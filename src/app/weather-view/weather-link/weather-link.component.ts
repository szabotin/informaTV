import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-weather-link',
	templateUrl: './weather-link.component.html',
	styleUrls: ['./weather-link.component.scss']
	})

export class WeatherLinkComponent {
  
	@Input() serieIndex: number ;
	@Input() pageIndex: number ;
	@Input() text : string ;
	
	constructor(private weatherService: WeatherService, private router: Router) { }

	onClic() {
		this.weatherService.setSerieIndex(this.serieIndex) ;
		this.weatherService.setPageIndex(this.pageIndex) ;
		this.router.navigate(['weather-page']) ;
	}
}
