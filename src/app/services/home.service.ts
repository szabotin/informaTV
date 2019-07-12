import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {

    linkSubject = new Subject<any[]>() ;

    private links = [ // delete or comment one bracket to delete one item or not
        {
            title : "messages",
            linkRef : 'messages-page', // refer to the app-routing.module.ts
            imageLink : 'assets/home/mess.png'
        },
        {
            title : "events",
            linkRef : 'events-page', // refer to the app-routing.module.ts
            imageLink : 'assets/home/cal.png'
        },
        {
            title : "reminders",
            linkRef : 'reminders-page', // refer to the app-routing.module.ts
            imageLink : 'assets/home/memo.png'
        },
        {
            title : "weather",
            linkRef : 'weather-page', // refer to the app-routing.module.ts
            imageLink : 'assets/home/weather.png'
        },
        {
            title : "news",
            linkRef : 'news-page', // refer to the app-routing.module.ts
            imageLink : 'assets/home/news.png'
        }
    ] ;

    emitLinkSubject() {
        this.linkSubject.next(this.links.slice()) ;
    }

    
}