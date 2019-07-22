import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HomeService } from '../services/home.service';
// import { PagesService } from '../services/pages.service';

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
    this.linkSubscription = this.homeService.linkSubject.subscribe(
      (links: any[]) => {
        this.links = links ;
      }
    ) ;
    
    this.homeService.emitLinkSubject() ;
  }

  ngOnDestroy() {
    this.linkSubscription.unsubscribe() ;
  }

}

