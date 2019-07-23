import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-link',
  templateUrl: './weather-link.component.html',
  styleUrls: ['./weather-link.component.scss']
})

export class WeatherLinkComponent {

  @Input() text : string ;
  @Input() indexPage : number ;
  
  constructor(private weatherService: WeatherService, private router: Router) { }

  onClic() {
    this.weatherService.setPageIndex(this.indexPage) ;
    this.router.navigate(['weather-page']) ;
  }
}
