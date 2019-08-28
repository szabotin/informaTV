import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-next-events',
	templateUrl: './next-events.component.html',
	styleUrls: ['./next-events.component.scss']
})

export class NextEventsComponent implements OnInit {

	headerText: string;
	categorySource: string;

	eventTime: string;
	eventDescription: string;

	constructor() { }

	ngOnInit() { // have to be linked to the events in the events.service.ts
		this.headerText = "Event";
		this.categorySource = "assets/events/categoryIcons/weather.png";
		this.eventTime = "8.00pm";
		this.eventDescription = "Aoife will come this evening !";
	}

}
