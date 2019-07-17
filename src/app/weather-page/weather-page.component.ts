import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  boxContent: any[] ;
  boxContentSubscription: Subscription ;

  constructor(private weatherService:  WeatherService) {
  }

  ngOnInit() {
    this.boxContentSubscription = this.weatherService.boxContentSubject.subscribe(
      (boxContent: any[]) => {
        this.boxContent = boxContent ;
      }
    ) ;
    this.weatherService.emitBoxContentSubject() ;
  }

  ngOnDestroy() {
    this.boxContentSubscription.unsubscribe()
  }

}
