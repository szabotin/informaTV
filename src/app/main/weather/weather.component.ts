import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  headerMessage = "Weather for today" ;
  footerMessage = "Click on what you want to see" ;

  constructor() { }

  ngOnInit() {
  }

}
