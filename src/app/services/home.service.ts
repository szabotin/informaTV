import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {

    linkSubject = new Subject<any[]>() ;

    private links = [ // delete or comment one bracket to delete one item or not
        {
            title : "Messages",
            imageLink : 'assets/home/mess.png',
            linkRef : 'messages-view' // refer to the app-routing.module.ts
        },
        {
            title : "Events",
            imageLink : 'assets/home/cal.png',
            linkRef : 'events-view' // refer to the app-routing.module.ts
        },
        {
            title : "Reminders",
            imageLink : 'assets/home/memo.png',
            linkRef : 'reminders' // refer to the app-routing.module.ts
        },
        {
            title : "Weather",
            imageLink : 'assets/home/weather.png',
            linkRef : 'weather-view' // refer to the app-routing.module.ts
        },
        {
            title : "News",
            imageLink : 'assets/home/news.png',
            linkRef : 'news-view' // refer to the app-routing.module.ts
        }
    ] ;

    emitLinkSubject() {
        this.linkSubject.next(this.links.slice()) ;
    }
}