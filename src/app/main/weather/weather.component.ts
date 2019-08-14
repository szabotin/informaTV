import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  headerText = "Weather for today" ;
  footerText = "Click on what you want to see" ;

  constructor() { }

  ngOnInit() {
  }

}
