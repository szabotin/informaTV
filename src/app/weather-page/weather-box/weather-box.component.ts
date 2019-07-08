import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['../../../reset.scss', '../../app.component.scss', '../weather-page.component.scss', './weather-box.component.scss']
})

export class WeatherBoxComponent implements OnInit {

  @Input() weathText : string ;
  @Input() weathIcon : string ;
  @Input() weathDate : string ;
  /*@Input() windText : string ;
  @Input() windIcon : string ;*/
  
  dateNumber : number = 5 ;

  constructor(private weathService : WeatherService) {

  }

  ngOnInit() {
    if (this.dateNumber > 12) {
      this.dateNumber -= 12 ;
      this.weathDate = this.dateNumber.toString().concat(".00 pm") ; ;
    }
    else {
      this.weathDate = this.dateNumber + ".00 am" ;
    }

  }
}
