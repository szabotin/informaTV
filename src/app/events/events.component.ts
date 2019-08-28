import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
	timeLinks: any[];
	timeLinksSubscription: Subscription;
	constructor(private eventsService: EventsService, private router: Router) {}

	ngOnInit() {

		this.timeLinksSubscription = this.eventsService.timeLinksSubject.subscribe(
			(times: any[]) => {
				this.timeLinks = times;
			}
		);
		this.eventsService.emitTimeLinksSubject();
	}

	onClick() {
	}
}
