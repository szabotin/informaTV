import { Component, OnInit } from '@angular/core';

import { SectionsNavService } from './services/sectionsNavService';
import { MessagesNavService } from './services/messagesNav.service';
import { MessagesService } from './services/messages.service';

import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/rx';

import 'rxjs/rx' ;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['../reset.scss', './app.component.scss']
})

export class AppComponent implements OnInit {

	routing: string;

	sections: any[] ;
	sectionsSubscription: Subscription;

	sectionIndex = 1;

	timeUnitPerPageBySection:any = {
		Messages: 1, // for the names, it refers to the title of the links in home.service
		Weather: 1,
		Reminders: 1,
		News: 1,
		Events: 1
	};

	timeUnitInMilliSeconds = 100;

	totalTimeUnits = 0;

	counterSubscription: Subscription;

	constructor(private router: Router,
				private sectionsNavService: SectionsNavService,
				private messagesNavService: MessagesNavService,
				private messagesService: MessagesService) { }

	ngOnInit() {

		this.sectionsSubscription = this.sectionsNavService.sectionsSubject.subscribe(
			(sections: any[]) => {
				this.sections = sections;
			}
		) ;
		this.sectionsNavService.emitLinksSubject();

		this.router.navigate(['start']);

		this.messagesService.setNbMessagesMaxDisplayed(3);
		
		this.autoRouting();
	}

	autoRouting() {
	 	var valueIndex = 0;
		var sectionName = this.sections[this.sectionIndex].title;
		var sectionPath = this.sections[this.sectionIndex].routing;
		var timeUnitsPerPage = this.timeUnitPerPageBySection[sectionName];
		var nbPagesToDisplay = this.getNbPagesToDisplay(sectionPath);
		var timeUnitsForSection = timeUnitsPerPage * nbPagesToDisplay; 
		this.sectionsNavService.select(this.sectionIndex);

		this.totalTimeUnits = this.getNbTimeUnitsToDisplayAll(); 

		const counter = Observable.interval(this.timeUnitInMilliSeconds).take(this.totalTimeUnits);

		this.initIndexs(sectionPath);

		this.counterSubscription = counter.subscribe(
			(value : number) => {
				if (valueIndex >= timeUnitsForSection) {
					valueIndex = 0;
					this.sectionIndex++;
					sectionName = this.sections[this.sectionIndex].title;
					sectionPath = this.sections[this.sectionIndex].routing;
					timeUnitsPerPage = this.timeUnitPerPageBySection[sectionName];
					nbPagesToDisplay = this.getNbPagesToDisplay(sectionPath);
					timeUnitsForSection = timeUnitsPerPage * nbPagesToDisplay;
					this.sectionsNavService.select(this.sectionIndex);
				}

				if (valueIndex % timeUnitsPerPage == 0) {
					this.setSectionIndexs(sectionPath, valueIndex/timeUnitsPerPage);
					this.navigate(sectionPath);
				}
				valueIndex++ ; 
				console.log("Name : " + sectionName, "\nPath : " + sectionPath, "\nTime Units Per Page : " + timeUnitsPerPage, 
							"\nNb Pages To Display for section : " + nbPagesToDisplay, "\nTime units for sections : " + timeUnitsForSection, 
							"\nValue Index : " + valueIndex, "\nSection Index : " + this.sectionIndex);
			},
			function (err) {
				console.log('Error: ' + err);
			},
			function () {  
				console.log("Done !"); 
			}
		) ;
	}

	getNbTimeUnitsToDisplayAll() {
		var timeUnits = 0 ;
		
		timeUnits += this.messagesService.getNbPagesToDisplay()    *  this.timeUnitPerPageBySection['Messages'];
		/* timeUnits += this.weatherService.getNbPagesToDisplay()  *  this.secondsPerPageBySection['Weather'];
		timeUnits += this.eventsService.getNbPagesToDisplay()      *  this.secondsPerPageBySection['Events'];
		timeUnits += this.newsService.getNbPagesToDisplay()        *  this.secondsPerPageBySection['News'];
		timeUnits += this.remindersService.getNbPagesToDisplay()   *  this.secondsPerPageBySection['Reminders']; */
	
		return timeUnits ;
	}

	getNbPagesToDisplay(section: string) {
		var nbPages: number;

		switch (section) {
			/* case 'events':
				nbPages = this.eventsService.getNbPagesToDisplay();
				break ; */
			case 'messages':
				nbPages = this.messagesService.getNbPagesToDisplay();
				break ;
			/* case 'news':
				nbPages = this.newsService.getNbPagesToDisplay();
				break ;
			case 'reminders':
				nbPages = this.remindersService.getNbPagesToDisplay();
				break ;
			case 'weather':
				nbPages = this.weatherService.getNbPagesToDisplay();
				break ; */
		}
		return nbPages ;
	}

	setSectionIndexs(section: string, value: number) {
		switch (section) {
			case 'messages':
				this.messagesNavService.setIndexs(this.messagesService.setIndexs(value));
				break ;
			/* case 'events-page':
				this.eventsService.setIndexs(value;
				break ;
			case 'news-page':
				this.newsService.setIndexs(value;
				break ;
			case 'reminders-page':
				this.remindersService.setIndexs(value;
				break ;
			case 'weather-page':
				this.weatherService.setIndexs(value;
				break ; */
		}
	}

	navigateBlankPageForSection(section: string) {
		switch(section) {
			case "messages":
				this.router.navigate(['messages-blank']);
				break;
		}
	}

	navigate(section: string) {
		this.navigateBlankPageForSection(section) ; // In order to change the path because we have problems if we just reroute on the same page here... Have to modify it ! Very bad code (have to delete the routing and the blank-page component if we delete this timeout)
		setTimeout(() => {
			this.router.navigate([section]) ;
		}, 0);
	}

	initIndexs(page: string) {
		switch (page) {
			case "begin": 
			case 'messages':
				this.messagesService.setPersonIndex(0);
				this.messagesService.setFirstMessageDisplayed(0);
				this.messagesNavService.setPersonIndex(0);
				this.messagesNavService.setFirstPersonLink(0);
				break;
		}
	}

	onClick() {
	 	this.sectionsNavService.select(this.sectionIndex);
		this.initIndexs(this.routing);
	}
}