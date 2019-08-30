import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventsService } from 'src/app/services/events.service';

@Component({
	selector: 'app-next-week-events',
	templateUrl: './next-week-events.component.html',
	styleUrls: ['./next-week-events.component.scss']
})

export class NextWeekEventsComponent implements OnInit {

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
