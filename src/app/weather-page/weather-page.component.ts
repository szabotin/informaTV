import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  bars: any[] ;

  constructor(private weatherService:  WeatherService) { 

  }

  ngOnInit() {
      this.bars = this.weatherService.weath ;
  }

}
