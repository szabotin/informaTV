import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/Rx' ;

@Injectable()

export class PagesService {
  pageSubject = new Subject<any[]>() ;

  private pages = [
    {
      title: 'Messages with',
      linkPage: 'message-page',
      headerAndFooterHeight: 'little',
      footerMessage: 'Here are your messages'
    },
    {
      title: 'Weather',
      linkPage: 'weather-page',
      headerAndFooterHeight: 'little',
      footerMessage: 'You can see the weather'
    },
    {
      title: 'Events',
      linkPage: 'events-page',
      headerAndFooterHeight: 'little',
      footerMessage: 'Here are your events'
    },
    {
      title: 'News',
      linkPage: 'news-page',
      headerAndFooterHeight: 'little',
      footerMessage: 'Use the arrows to change news' 
    },
    {
      title: 'Reminders',
      linkPage: 'reminders-page',
      headerAndFooterHeight: 'little',
      footerMessage: 'Don\'t forget that ! '
    },
    {
      title: 'Home',
      linkPage: 'home-page',
      headerAndFooterHeight: 'big',
      footerMessage: 'Use the arrows to change item and click to go into'
    },
    {
      title: 'Messages',
      linkPage: 'messages-view',
      headerAndFooterHeight: 'big',
      footerMessage: 'Choose the person you want to see the messages'
    }
  ] ;

  constructor(private router: Router) {}

  emitPageSubject() {
      this.pageSubject.next(this.pages.slice()) ;
  }

  getIndexOfPageByTitle(pageTitle, tab) {
      for(var i = 0 ; i < tab.length ; i++){
        if (tab[i]['title'] == pageTitle) {
          return i ;
        }
      }
        return -1 ;
    }

  getIndexOfPageByLink(pageTitle, tab) {
      for(var i = 0 ; i < tab.length ; i++){
        if (tab[i]['linkPage'] == pageTitle) {
          return i ;
        }
      }
        return -1 ;
  }

    // changeTitle(index: number, newTitle: string) {
    //     this.pages[index].title = newTitle ;
    //     this.emitPageSubject() ;
    // }
}