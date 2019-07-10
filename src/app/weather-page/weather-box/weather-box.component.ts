import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['../../../reset.scss', '../../app.component.scss', '../weather-page.component.scss', './weather-box.component.scss']
})

export class WeatherBoxComponent implements OnInit {

  @Input() date : string ;
  @Input() weathText : string ;
  @Input() weathIconPath : string ;
  @Input() windText : string ;
  @Input() temperature : string ;

  windIconPath : string = "assets/weather/wind.png" ;

  constructor(private weathService : WeatherService) {
  }

  ngOnInit() {
  }
}
