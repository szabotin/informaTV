import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['../../../../reset.scss', './weather-box.component.scss']
})

export class WeatherBoxComponent {

	@Input() numberOfBoxes: string ;

	@Input() date: string ;
	@Input() weathText: string ;
	@Input() weathIconPath: string ;
	@Input() windText: string ;
	@Input() temperature: string ;

	windIconPath: string = "assets/weather/wind.png" ;
}