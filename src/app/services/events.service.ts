import { Subject } from 'rxjs/internal/Subject';

export class EventsService {
    
    timeLinksSubject = new Subject<any[]>();
    weekLinksSubject = new Subject<any[]>();

    private timeLinks = [ // here are the time-link details. You can add or delete one section easily
        {
            time: "Upcoming Events",
            routing: "next" // refer to app-routing.module.ts
        },
        {
            time: "Next Week",
            routing: "next-week" // refer to app-routing.module.ts
        },
        {
            time: "In a long time",
            routing: "after" // refer to app-routing.module.ts
        }
    ]

    private weekLinks = [
        {
            day: "Monday"
        },
        {
            day: "Tuesday"
        },
        {
            day: "Wednesday"
        },
        {
            day: "Thursday"
        },
        {
            day: "Friday"
        },
        {
            day: "Saturday"
        },
        {
            day: "Sunday"
        }
    ]

    private nextEvents = [
        {
            title:"Aoife is on the way",
            time: "6:00pm",
            category: "visit",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        },
        {
            title:"Take your pills",
            time: "9:00pm",
            category: "medication",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        },
        {
            title:"Aoife is on the way",
            time: "6:00pm",
            category: "visit",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        },
        {
            title:"Aoife is on the way",
            time: "6:00pm",
            category: "visit",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        }
    ]

    private nextWeekEvents = [
        {
            title:"Aoife is on the way",
            time: "Wednesday",
            category: "visit",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        },
        {
            title:"Big storm upcoming",
            time: "Thursday",
            category: "weather",
            description: "Be careful of this big storm on Thursday. Maybe you can go shopping on Wednesday instead"
        },
        {
            title:"Aoife is on the way",
            time: "Friday",
            category: "visit",
            description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
        },
        {
            title:"Sunny day",
            time: "Saturday",
            category: "weather",
            description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
        }
    ]

    emitTimeLinksSubject() {
        this.timeLinksSubject.next(this.timeLinks.slice());
    }

    emitWeekLinksSubject() {
        this.weekLinksSubject.next(this.weekLinks.slice());
    }
}