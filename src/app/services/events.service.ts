import { Subject } from 'rxjs/Subject';

export class EventsService {

    private eventsSerieIndex: number ;
    private eventIndex: number ;

    eventsPagesSubject = new Subject<any[]>() ;
    
    private eventsPages = [ // delete or comment one bracket to delete one event
        [ // Series of 3 events
            {
                title: "Aoife will visit you",
                photoPath: "assets/events/aoife.jpg",
                text: "Your daughter Aoife will come to visit you this afternoon. She will bring you a little souvenir of her last trip in Slovenia. \
                    She thinks a lot about you and want to see you before go back to work on Monday. "
            },
            {
                title: "Big storm upcoming",
                photoPath: "assets/events/storm.jpg",
                text: "A storm is forecast for next week. You should be aware of it and don't go outside between 8am and 11am !"
            },
            {   
                title: "Go shopping",
                photoPath: "assets/events/shopping.jpg",
                text: "You planned to go shopping on Thursday. Theevent will be cool. It may be a opportunity to go with Saoirse.\
                Maybe you can take the bus (number 46 at 2.03pm). Your priority will be to buy a present for Conor's birthday. "
            }
        ],
        [ // Series of 3 events
            {
                title: "Big storm upcoming",
                photoPath: "assets/events/storm.jpg",
                text: "A storm is forecast for next week. You should be aware of it and don't go outside between 8am and 11am !"
            },
            {
                title: "Go shopping",
                photoPath: "assets/events/shopping.jpg",
                text: "You planned to go shopping on Thursday. Theevent will be cool. It may be a opportunity to go with Saoirse.\
                Maybe you can take the bus (number 46 at 2.03pm). Your priority will be to buy a present for Conor's birthday. "
            },
            {   
                title: "Aoife will visit you",
                photoPath: "assets/events/aoife.jpg",
                text: "Your daughter Aoife will come to visit you this afternoon. She will bring you a little souvenir of her last trip in Slovenia. \
                She thinks a lot about you and want to see you before go back to work on Monday. "
            }
        ]
    ] ;

    emitEventsSubject() {
        this.eventsPagesSubject.next(this.eventsPages.slice()) ;
    }

    getEventsSerieIndex() {
        return this.eventsSerieIndex ;
    }
	getEventIndex() {
        return this.eventIndex ;
    }

    getNbPagesToDisplay() {
        var nbPages = 0 ;

        for (var i = 0 ; i < this.eventsPages.length ; i++) {
            nbPages += this.eventsPages[i].length ;
        }

        return nbPages ;
    }

    setSerieIndex(index: number) {
        this.eventsSerieIndex = index ;
    }
	setPageIndex(index: number) {
        this.eventIndex = index ;
    }

    setIndexs(index: number) { // this function is similar to the way we count numbers. (units, dozens, hundreds...), ut applied with our structure (eventBoxIndex,eventPageIndex, ...)
        var eventsSerieIndex = 0 ;
        var eventIndex = 0 ;
        
        for (var i = 0 ; i < index ; i++) { // change : we can avoid this loop for every indexes
            eventIndex++ ;
            if (eventIndex >= this.eventsPages[eventsSerieIndex].length) {
                eventIndex = 0 ;
                eventsSerieIndex++ ;
            }
        }
        
        this.eventsSerieIndex = eventsSerieIndex ;
        this.eventIndex = eventIndex ;
    }

    getLength() {
        return this.eventsPages.length ;
    }
}