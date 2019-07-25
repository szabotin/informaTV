import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {

    sectionsSubject = new Subject<any[]>() ;

    private sections = [ // delete or comment one bracket to delete one item or not
        {
            title : "Messages",
            autoRouting : 'messages-page', // refer to the app-routing.module.ts
            link : [{
                ref : 'messages-view', // refer to the app-routing.module.ts
                image : 'assets/home/mess.png'
            }]
        },
        {
            title : "Events",
            autoRouting : 'events-page', // refer to the app-routing.module.ts
            link : [{
                ref : 'events-view', // refer to the app-routing.module.ts
                image : 'assets/home/cal.png'
            }]
        },
        {
            title : "Reminders",
            autoRouting : 'reminders-page', // refer to the app-routing.module.ts
            link : [{
                ref : 'reminders-page', // refer to the app-routing.module.ts
                image : 'assets/home/memo.png'
            }]
        },
        {
            title : "Weather",
            autoRouting : 'weather-page', // refer to the app-routing.module.ts
            link : [{
                ref : 'weather-view', // refer to the app-routing.module.ts
                image : 'assets/home/weather.png'
            }]
        },
        {
            title : "News",
            autoRouting : 'news-page', // refer to the app-routing.module.ts
            link : [{
                ref : 'news-view', // refer to the app-routing.module.ts
                image : 'assets/home/news.png'
            }]
        }
    ] ;

    emitHomeSubject() {
        this.sectionsSubject.next(this.sections.slice()) ;
    }
}