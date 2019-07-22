import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-link',
  templateUrl: './weather-link.component.html',
  styleUrls: ['./weather-link.component.scss']
})

export class WeatherLinkComponent {

  @Input() text : string ;
  @Input() indexLink : number ;
  
  constructor(private router: Router) { }

  onClic() {
    this.router.navigate(['weather-page']) ;
  }
}
