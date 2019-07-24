import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['../../reset.scss', './events-view.component.scss']
})

export class EventsViewComponent implements OnInit, OnDestroy {

	hMessage = 'Events' ;
	fMessage = 'Click on the event you want to see. Use the arrows to see the others events' ;
	hfHeight = 'big' ;
	serieIndex = 0 ;

	eventsPages: any[] ;
	eventsPagesSubscription: Subscription ;

	constructor(private eventsService: EventsService) { }

	ngOnInit() {
		this.eventsPagesSubscription = this.eventsService.eventsPagesSubject.subscribe(
			(newsPages: any[]) => {
				this.eventsPages = newsPages ;
			}
		) ;
		this.eventsService.emitEventsSubject() ;
	}

	ngOnDestroy() {
		this.eventsPagesSubscription.unsubscribe() ;
	}

	isFirstPage() {
		return this.serieIndex == 0 ;
	}
	isLastPage() {
		return this.serieIndex >= this.eventsPages.length - 1 ;
	}

	onClickLeft() {
		if (this.serieIndex > 0)
			this.serieIndex-- ;
	}
	onClickRight() {
		if (this.serieIndex < this.eventsPages.length)
			this.serieIndex ++ ;
	}
}
