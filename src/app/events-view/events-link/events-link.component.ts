import { Component, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-link',
  templateUrl: './events-link.component.html',
  styleUrls: ['./events-link.component.scss']
})

export class EventsLinkComponent {

  @Input() serieIndex: number ;
  @Input() pageIndex: number ;
  @Input() photoPath: string ;
  
  constructor(private eventsService: EventsService, private router: Router) { 
  }

  onClic() {
    this.eventsService.setSerieIndex(this.serieIndex) ;
    this.eventsService.setPageIndex(this.pageIndex) ;
    this.router.navigate(['events-page']) ;
  }
}