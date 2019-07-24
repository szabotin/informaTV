import { Subject } from 'rxjs/Subject';

export class EventsService {

    private serieIndex: number ;
    private pageIndex: number ;

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
                text: "You planned to go shopping on Thursday. The weather will be cool. It may be a opportunity to go with Saoirse.\
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
                text: "You planned to go shopping on Thursday. The weather will be cool. It may be a opportunity to go with Saoirse.\
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

    getSerieIndex() {
        return this.serieIndex ;
    }
	getPageIndex() {
        return this.pageIndex ;
    }

    setSerieIndex(index: number) {
        this.serieIndex = index ;
    }
	setPageIndex(index: number) {
        this.pageIndex = index ;
    }

    getLength() {
        return this.eventsPages.length ;
    }
}