import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WeatherService } from '../services/weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

	timeLinks: any[];
	timeLinksSubscription: Subscription;

	constructor(private weatherService: WeatherService) {}

	ngOnInit() {

		this.timeLinksSubscription = this.weatherService.timeLinksSubject.subscribe(
			(times: any[]) => {
				this.timeLinks = times;
			}
		);
		this.weatherService.emitTimeLinksSubject();
	}

	onClick() {
	}

}
