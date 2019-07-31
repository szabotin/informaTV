import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './services/home.service';
import { EventsService } from './services/events.service';
import { MessagesService } from './services/messages.service';
import { MessagesPagesService } from './services/messagesPages.service';
import { NewsService } from './services/news.service';
import { RemindersService } from './services/reminders.service';
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

export class AppComponent implements OnInit, OnDestroy {

	secondsPerPageBySection:any = {
		Messages: 1, // for the names, it refers to the title of the links in home.service
		Weather: 1,
		Reminders: 1,
		News: 1,
		Events: 1
	};

	totalSeconds = 0 ;
	timeUnitInMilliSeconds = 1000 ;

	nbSectionsDone = 0 ;

	sections: any[] ;
	sectionsSubscription: Subscription ;

	counterSubscription: Subscription ;

	constructor(private homeService: HomeService, 
				private eventsService: EventsService, 
				private messagesService: MessagesService,
				private messagesPagesService: MessagesPagesService,
				private newsService: NewsService,
				private remindersService: RemindersService,
				private weatherService: WeatherService,   
				private router: Router) { }

	ngOnInit() {
		this.sectionsSubscription = this.homeService.sectionsSubject.subscribe(
			(sections: any[]) => {
				this.sections = sections ;
			}
		) ;
		this.homeService.emitHomeSubject() ;

		// this.messagesService.setPersonIndex(0) ;
		// this.messagesPagesService.setSerieIndex(0) ;
		// this.messagesPagesService.setPageIndex(0) ;
		
		this.totalSeconds = this.getNbSecondsToDisplayAll() ;

		this.router.navigate(['blank-page']) ;
		
		this.autoRouting() ;
		
		setTimeout(() => { // Maybe optimise this ?
	 		this.router.navigate( ['home-page'] ) ;
		}, this.totalSeconds * (this.timeUnitInMilliSeconds + 1)) ;
			
	}

	ngOnDestroy() {
		this.sectionsSubscription.unsubscribe() ;
	}		

	autoRouting() {
		
		var valueIndex = 0 ;
		var sectionIndex = 0 ;
		var sectionName = this.sections[sectionIndex].title ;
		var sectionPath = this.sections[sectionIndex].autoRouting ;
		var nbSecondsPerPage = this.secondsPerPageBySection[sectionName] ;
		var nbPagesToDisplay = this.getNbPagesToDisplay(sectionPath) ;
		var nbSecondsForSection = nbSecondsPerPage * nbPagesToDisplay ;

		const counter = Observable.interval(this.timeUnitInMilliSeconds).take(this.totalSeconds) ;

		this.counterSubscription = counter.subscribe(
			(value : number) => {
				if (valueIndex >= nbSecondsForSection) {
					valueIndex = 0 ;
					sectionIndex++ ;
					sectionName = this.sections[sectionIndex].title ;
					sectionPath = this.sections[sectionIndex].autoRouting ;
					nbSecondsPerPage = this.secondsPerPageBySection[sectionName] ;
					nbPagesToDisplay = this.getNbPagesToDisplay(sectionPath) ;
					nbSecondsForSection = nbSecondsPerPage * nbPagesToDisplay ;
				}

				if (valueIndex % nbSecondsPerPage == 0) {
					this.setSectionIndexs(sectionPath, valueIndex/nbSecondsPerPage) ;
					this.navigate(sectionPath) ;
				}
				
				valueIndex++ ;
				// console.log(sectionName, sectionPath, nbSecondsPerPage, nbPagesToDisplay, nbSecondsForSection, valueIndex, sectionIndex) ;
			},
			function (err) {
				console.log('Error: ' + err) ;
			},
			function () {  
				console.log("terminé !") ; 
			}
		) ;		
	}

	getNbSecondsToDisplayAll() {
		var nbSeconds = 0 ;
		
		nbSeconds += this.messagesService.getNbPagesToDisplay()  * this.secondsPerPageBySection['Messages']  ;
		nbSeconds += this.weatherService.getNbPagesToDisplay()   * this.secondsPerPageBySection['Weather']   ;
		nbSeconds += this.eventsService.getNbPagesToDisplay()    * this.secondsPerPageBySection['Events']    ;
		nbSeconds += this.newsService.getNbPagesToDisplay()      * this.secondsPerPageBySection['News']      ;
		nbSeconds += this.remindersService.getNbPagesToDisplay() * this.secondsPerPageBySection['Reminders'] ;
		
		return nbSeconds ;
	}
		
	getNbPagesToDisplay(section: string) {
		switch (section) {
			case 'events-page':
				var nbPages = this.eventsService.getNbPagesToDisplay() ;
				break ;
			case 'messages-page':
				var nbPages = this.messagesService.getNbPagesToDisplay() ;
				break ;
			case 'news-page':
				var nbPages = this.newsService.getNbPagesToDisplay() ;
				break ;
			case 'reminders-page':
				var nbPages = this.remindersService.getNbPagesToDisplay() ;
				break ;
			case 'weather-page':
				var nbPages = this.weatherService.getNbPagesToDisplay() ;
				break ;
		}
		return nbPages ;
	}

	setSectionIndexs(section: string, value: number) {
		switch (section) {
			case 'messages-page':
				this.messagesPagesService.setIndexs(this.messagesService.setIndexs(value)) ;
				break ;
			case 'events-page':
				this.eventsService.setIndexs(value) ;
				break ;
			case 'news-page':
				this.newsService.setIndexs(value) ;
				break ;
			case 'reminders-page':
				this.remindersService.setIndexs(value) ;
				break ;
			case 'weather-page':
				this.weatherService.setIndexs(value) ;
				break ;
		}
	}

	navigate(page: string) {
		this.router.navigate(['blank-page']) ; // In order to change the path because we have problems if we just reroute on the same page here... Have to modify it ! Very bad code (have to delete the routing and the blank-page component if we delete this timeout)
		setTimeout(() => {
			this.router.navigate([page]) ;
		}, 0);
	}
}