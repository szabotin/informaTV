import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})

export class EventsPageComponent implements OnInit, OnDestroy {

	hMessage: string ;
	pageIndex: number ;

	fMessage = 'Use the arrows to see another event' ;
	hfHeight = 'little' ;
	
	eventsPages: any[] ;
	eventsPagesSubscription: Subscription ;
	
	constructor(private eventsService: EventsService) {
	}
	
	ngOnInit() {
		
		this.eventsPagesSubscription = this.eventsService.eventsPagesSubject.subscribe(
			(eventsPages: any[]) => {
				this.eventsPages = eventsPages ;
			}) ;
		this.eventsService.emitEventsSubject() ;
		
		this.pageIndex = this.eventsService.getPageIndex() ;
		this.hMessage = this.eventsPages[this.pageIndex].title ;
	}

	ngOnDestroy() {
		this.eventsPagesSubscription.unsubscribe()
	} 
}