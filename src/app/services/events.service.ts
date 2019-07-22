import { Subject } from 'rxjs/Subject';

export class EventsService {

    eventsPagesSubject = new Subject<any[]>() ;
    
    private eventsPages = [ // delete or comment one bracket to delete one person or not
        {
            title: "Event 1",
            photoPath: "assets/events/aoife.jpg",
            text: "Your daughter Aoife will come to you this afternoon. She will bring you a little souvenir of her last trip in Slovenia. \
                   She thinks a lot about you and want to see you before go back to work on Monday. "
        },
        {
            linkText: "Event 2",
            photoPath: "assets/events/aoife.jpg",
            text: "Your daughter Aoife will come to you this afternoon. She will bring you a little souvenir of her last trip in Slovenia. \
            She thinks a lot about you and want to see you before go back to work on Monday. "
        },
        {   
            linkText: "Event 3",
            photoPath: "assets/events/aoife.jpg",
            text: "Your daughter Aoife will come to you this afternoon. She will bring you a little souvenir of her last trip in Slovenia. \
            She thinks a lot about you and want to see you before go back to work on Monday. "
        }
    ] ;

    emitEventsSubject() {
        this.eventsPagesSubject.next(this.eventsPages.slice()) ;
    }

   /*  getIndexOfPageByTitle(pageTitle, tab) {
        for(var i = 0 ; i < tab.length ; i++){
            if (tab[i]['title'] == pageTitle) {
                return i ;
            }
        }
        return -1 ;
    } */
}