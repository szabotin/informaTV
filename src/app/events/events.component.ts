import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
	timeLinks: any[];
	timeLinksSubscription: Subscription;
	constructor(private eventsService: EventsService) {}

	ngOnInit() {

		this.timeLinksSubscription = this.eventsService.timeLinksSubject.subscribe(
			(times: any[]) => {
				this.timeLinks = times;
			}
		);
		this.eventsService.emitTimeLinksSubject();
	}
}
