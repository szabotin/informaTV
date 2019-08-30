import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-after-events',
	templateUrl: './after-events.component.html',
	styleUrls: ['./after-events.component.scss']
})

export class AfterEventsComponent implements OnInit {

	headerText: string;
	categorySource: string;

	eventTime: string;
	eventDescription: string;

	events: any[];
	eventSubscription: Subscription;

	constructor(private eventsService: EventsService) {}

	ngOnInit() {
		this.eventSubscription = this.eventsService.eventsSubject.subscribe(
			(events: any[]) => {
				this.events = events;
			}
		);
		this.eventsService.emitEventsSubject();

		var eventSerieIndex = this.eventsService.getEventSerieIndex();
		var eventIndex = this.eventsService.getEventIndex();
		
		this.headerText = this.events[eventSerieIndex][eventIndex].title;

		this.categorySource = this.events[eventSerieIndex][eventIndex].catIconPath;
		this.eventTime = this.events[eventSerieIndex][eventIndex].time;
		this.eventDescription = this.events[eventSerieIndex][eventIndex].description;
	}
}
