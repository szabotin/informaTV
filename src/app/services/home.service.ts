import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {

    linkSubject = new Subject<any[]>() ;

    private links = [
        {
            title : "messages",
            linkRef : 'newMessages',
            imageLink : 'assets/home/mess.png'
        },
        {
            title : "events",
            linkRef : 'events-page',
            imageLink : 'assets/home/cal.png'
        },
        {
            title : "reminders",
            linkRef : 'reminders-page',
            imageLink : 'assets/home/memo.png'
        },
        {
            title : "weather",
            linkRef : 'weather-page',
            imageLink : 'assets/home/weather.png'
        },
        {
            title : "news",
            linkRef : 'news-page',
            imageLink : 'assets/home/news.png'
        }
    ] ;

    emitLinkSubject() {
        this.linkSubject.next(this.links.slice()) ;
    }

    
}