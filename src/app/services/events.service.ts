import { Subject } from 'rxjs/internal/Subject';

export class EventsService {
    
    private eventSerieIndex: number;
    private eventIndex: number;

    timeLinksSubject = new Subject<any[]>();
    weekLinksSubject = new Subject<any[]>();
    eventsSubject    = new Subject<any[]>();
    
    private weekLinks = ["Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday","Sunday"]
    
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

    private events = [
        [ // Upcoming events
            {
                title:"Aoife is on the way",
                time: "6:00pm",
                category: "visit",
                catIconPath: "assets/events/categoryIcons/weather.png", // update the paths, so the icons
                description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
            },
            {
                title:"Take your pills",
                time: "9:00pm",
                category: "medication",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
            },
            {
                title:"Aoife is on the way",
                time: "6:00pm",
                category: "visit",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
            }
        ],
        [ // Next Week events
            {
                title:"Fionnan birthday !!",
                time: "Tuesday 10:00 am",
                category: "party",
                catIconPath: "assets/events/categoryIcons/party.png",
                description: "Don't forget to say Happy Birthday to him and maybe visit him ! He will be happy to see you"
            },
            {
                title:"Aoife is on the way",
                time: "Wednesday",
                category: "visit",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
            },
            {
                title:"Big storm upcoming",
                time: "Thursday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "Be careful of this big storm on Thursday. Maybe you can go shopping on Wednesday instead"
            },
            {
                title:"Aoife is on the way",
                time: "Friday",
                category: "visit",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "Aoifa will come this afternoon to give you some food she brings back from Singapor"
            },
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            }
        ],
        [ // Events who will be in a long time
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            },
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            },
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            },
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            },
            {
                title:"Sunny day",
                time: "Saturday",
                category: "weather",
                catIconPath: "assets/events/categoryIcons/weather.png",
                description: "The weather will be nice on Saturday. Maybe you can call take advantage to go to Howth"
            }
        ]
    ]

    emitTimeLinksSubject() {
        this.timeLinksSubject.next(this.timeLinks.slice());
    }

    emitWeekLinksSubject() {
        this.weekLinksSubject.next(this.weekLinks.slice());
    }

    emitEventsSubject() {
        this.eventsSubject.next(this.events.slice());
    }

    getEventSerieIndex() {
        return this.eventSerieIndex;
    }
    getEventIndex() {
        return this.eventIndex;
    }
    
    setEventSerieIndex(index: number) {
        this.eventSerieIndex = index;
    }
    setEventIndex(index: number) {
        this.eventIndex = index;
    }
}