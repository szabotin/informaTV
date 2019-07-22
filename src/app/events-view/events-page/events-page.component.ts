import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})

export class EventsPageComponent implements OnInit, OnDestroy {
  
  // imageLink: string ;
  // indexPage: number ;

  hMessage = 'Events' ;
  fMessage = 'Use the arrows to see the others events' ;
  hfHeight = 'little' ;

  eventsPages: any[] ;
  eventsPagesSubscription: Subscription ;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {

    this.eventsPagesSubscription = this.eventsService.eventsPagesSubject.subscribe(
      (eventsPages: any[]) => {
        this.eventsPages = eventsPages ;
      }
    ) ;

    this.eventsService.emitEventsSubject() ;


    // Get the indexPage from the event title
    // Be carful -> refer to the event titlw in events.service.ts

    // this.indexPage = this.eventsService.getIndexOfPageByTitle('events', this.eventsPages) ; 
  }

  ngOnDestroy() {
    this.eventsPagesSubscription.unsubscribe()
  } 
}