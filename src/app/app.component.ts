import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { EventsService } from './services/events.service';
import { MessagesService } from './services/messages.services';
import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../reset.scss', './app.component.scss']
})

export class AppComponent implements OnInit {

	timePerSection: number = 4000 ;
	sections: any[] ;
	sectionsSubscription: Subscription ;

	counterSubscription: Subscription ;

	constructor(private homeService: HomeService, 
				private eventsService: EventsService, 
				private messagesService: MessagesService,
				private newsService: NewsService,
				private weatherService: WeatherService,   
				private router: Router) { }

	ngOnInit() {
		this.sectionsSubscription = this.homeService.sectionsSubject.subscribe(
		(sections: any[]) => {
			this.sections = sections ;
		}
		) ;
		this.homeService.emitHomeSubject() ;

		// this.weatherService.setSerieIndex(0) ;
		// this.weatherService.setPageIndex(1) ;
		this.router.navigate(['home-page']) ;

		// this.autoRouting(this.timePerSection) ;

		// setTimeout(() => { // Maybe optimise this ?
		// 	this.router.navigate( ['home-page'] ) ;
		// }, this.timePerSection * 4 );
			
	}

	ngOnDestroy() {
		this.sectionsSubscription.unsubscribe()
	}

	getSectionLength(section: string) {
		switch (section) {
			case 'messages-page':
				return this.messagesService.getLength() ;
			case 'events-page':
				return this.eventsService.getLength() ;
			case 'news-page':
				return this.newsService.getLength() ;
			case 'weather-page':
				return this.weatherService.getLength() ;
		}
	}

	setSectionPageIndex(section: string, value: number) {
		switch (section) {
			case 'messages-page':
				this.messagesService.setPageIndex(value) ;
				break ;

			case 'events-page':
				this.eventsService.setPageIndex(value) ;
				break ;

			case 'news-page':
				this.newsService.setPageIndex(value) ;
				break ;

			case 'weather-page':
				this.weatherService.setPageIndex(value) ;
				break ;
		}
	}

	navigate(page: string) {
		this.router.navigate(['blank-page']) ; // In order to change the path because we have problems if we just reroute on the same page here... Have to modify it ! Very bad code (have to delete the routing and the blank-page component if we delete this timeout)
		setTimeout(() => {
			this.router.navigate([page]) ;
		}, 0);
	}

	navigateFirstPage(section: string) {
		this.setSectionPageIndex(section, 0) ;
		this.navigate(section) ;
	}

	autoRouting(timePerSection: number) {

		const counter = Observable.interval(timePerSection).take(this.sections.length - 1) ;
		
		var section: string = this.sections[0].autoRouting ;
		var sectionLength: number = this.getSectionLength(section) ;
		var timePerPage: number = timePerSection / sectionLength ;

		this.sectionRouting(section, sectionLength, timePerPage) ;

		this.counterSubscription = counter.subscribe(
			(value : number) => {
				section = this.sections[value + 1].autoRouting ;
				sectionLength = this.getSectionLength(section) ;
				timePerPage = timePerSection / sectionLength ;
				this.sectionRouting(section, sectionLength, timePerPage) ;
			},
			function (err) {
				console.log('Error: ' + err) ;
			},
			function () { console.log("terminé !") }
		) ;
	}
	
	sectionRouting(section: string, sectionLength: number, timePerPage: number) {
		
		const counter = Observable.interval(timePerPage).take(sectionLength - 1) ;
		
		this.navigateFirstPage(section) ;

		this.counterSubscription = counter.subscribe(
			(value : number) => {
				this.setSectionPageIndex(section, value + 1) ;
				this.navigate(section) ;
			},
			function (err) {
				console.log('Error: ' + err) ;
			},
			function () { console.log("terminé !") }
		) ;					
	}
}