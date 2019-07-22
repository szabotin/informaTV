import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-link',
  templateUrl: './events-link.component.html',
  styleUrls: ['./events-link.component.scss']
})

export class EventsLinkComponent {

  @Input() photoPath: string ;
  
  constructor(private router: Router) { 
  }

  onClic() {
    this.router.navigate(['events-page']) ;
  }
}