import { Observable } from 'rxjs/Observable' ;
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx' ;
import { Injectable } from '@angular/core';

@Injectable()

export class PagesService {
    pageSubject = new Subject<any[]>() ;
    //counterSubscription: Subscription ;

    private pages = [
        {
          title : 'Messages',
          linkPage : 'newMessages',
          bigMain : true, 
          footerMessage : 'Use the arrows to navigate'
        },
        {
          title : 'Weather',
          linkPage : 'weather-page',
          bigMain : true, 
          footerMessage : 'Use the arrows to navigate'
        },
        {
          title : 'Events',
          linkPage : 'events-page',
          bigMain : true, 
          footerMessage : 'Use the arrows to navigate'
        },
        {
          title : 'News',
          linkPage : 'news-page',
          bigMain : true, 
          footerMessage : 'Use the arrows to navigate'
        },
        {
          title : 'Reminders',
          linkPage : 'reminders-page',
          bigMain : true, 
          footerMessage : 'Use the arrows to navigate'
        },
        {
          title : 'Home',
          linkPage : 'home-page',
          bigMain : false, 
          footerMessage : 'Use the arrows to navigate'
        }
    ] ;

    constructor(private router: Router) {}

    emitPageSubject() {
        this.pageSubject.next(this.pages.slice()) ;
    }

    changeTitle(index: number, newTitle: string) {
        this.pages[index].title = newTitle ;
        this.emitPageSubject() ;
    }

    

    /*autoRouting(nbPages: number) {
      
      //this.router.navigate(['newMessages']) ;

      var ms = 4000 ;
      const counter = Observable.interval(ms) ;
      this.counterSubscription = counter.subscribe(
      (value : number) => {
        if (value < nbPages) {
          
          this.router.navigate([this.pages[value].linkPage]) ;
        }
        else {
          this.router.navigate('') ;
        }
      }
      ) ;
    }*/
}