import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HomeService } from '../services/home.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['../../reset.scss', './home-page.component.scss']
})

export class HomePageComponent implements OnInit, OnDestroy {

    hMessage = 'Home' ;
    fMessage = 'Use the arrows to change item and click to go into' ; 
    hfHeight = 'big' ;

    links: any[] ;
    linkSubscription: Subscription ;

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.linkSubscription = this.homeService.sectionsSubject.subscribe(
            (links: any[]) => {
              	this.links = links ;
            }
		) ;
		
      	this.homeService.emitHomeSubject() ;
    }

    ngOnDestroy() {
      	this.linkSubscription.unsubscribe() ;
    }

}

