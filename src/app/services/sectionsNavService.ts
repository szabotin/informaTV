import { Subject } from 'rxjs/internal/Subject';

export class SectionsNavService {

    linksSubject = new Subject<any[]>() ;

    private links = [ // delete or comment one bracket to delete one item or not
        {
            text: "Events",
            routing: 'events', // refer to the app-routing.module.ts
            iconPath: 'assets/home/cal.png'
        },
        {
            text: "Messages",
            routing: 'messages', // refer to the app-routing.module.ts
            iconPath: 'assets/home/mess.png'
        },
        {
            text: "News",
            routing: 'news', // refer to the app-routing.module.ts
            iconPath: 'assets/home/news.png'
        },
        {
            text: "Reminders",
            routing: 'reminders', // refer to the app-routing.module.ts
            iconPath: 'assets/home/memo.png'
        },
        {
            text: "Weather",
            routing: 'weather', // refer to the app-routing.module.ts
            iconPath: 'assets/home/weather.png'
        }
    ] ;

    emitLinksSubject() {
        this.linksSubject.next(this.links.slice()) ;
    }
}