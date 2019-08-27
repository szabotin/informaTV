import { Subject } from 'rxjs/internal/Subject';

export class SectionsNavService {

    sectionsSubject = new Subject<any[]>();

    private sections = [ // here are the section-link details. You can add or delete one section easily
        {
            title: "Events",
            routing: 'events', // refer to the app-routing.module.ts
            iconPath: 'assets/home/cal.png',
            selected: false
        },
        {
            title: "Messages",
            routing: 'messages', // refer to the app-routing.module.ts
            iconPath: 'assets/home/mess.png',
            selected: false
        },
        {
            title: "News",
            routing: 'news', // refer to the app-routing.module.ts
            iconPath: 'assets/home/news.png',
            selected: false
        },
        /*{
            title: "Reminders",
            routing: 'reminders', // refer to the app-routing.module.ts
            iconPath: 'assets/home/memo.png',
            selected: false
        },*/
        {
            title: "Weather",
            routing: 'weather', // refer to the app-routing.module.ts
            iconPath: 'assets/home/weather.png',
            selected: false
        }
    ];

    emitLinksSubject() {
        this.sectionsSubject.next(this.sections.slice());
    }

    select(index: number) { // always see all the indexes. May just set selected = 0 to the previous selected and set 1 for the new.
        this.sections[index].selected = true;
        
        for (var i = 0 ; i < this.sections.length ; i++) {
            if (this.sections[i].selected && i != index) {
                this.sections[i].selected = false;
            } 
        }

        this.emitLinksSubject() ;
    }
}