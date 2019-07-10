import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/Rx' ;

@Injectable()

export class PagesService {
    pageSubject = new Subject<any[]>() ;
    //counterSubscription: Subscription ;

    private pages = [
        {
          title : 'Messages',
          linkPage : 'newMessages',
          bigMain : true, 
          footerMessage : 'Here are your messages'
        },
        {
          title : 'Weather',
          linkPage : 'weather-page',
          bigMain : true, 
          footerMessage : 'You can see the weather'
        },
        {
          title : 'Events',
          linkPage : 'events-page',
          bigMain : true, 
          footerMessage : 'Here are your events'
        },
        {
          title : 'News',
          linkPage : 'news-page',
          bigMain : true, 
          footerMessage : 'Let\'s see some news now' 
        },
        {
          title : 'Reminders',
          linkPage : 'reminders-page',
          bigMain : true, 
          footerMessage : 'Don\'t forget that ! '
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