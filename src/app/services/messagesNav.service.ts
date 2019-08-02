import { Subject } from 'rxjs/internal/Subject';

export class MessagesNavService {

    linksSubject = new Subject<any[]>() ;

    private links = [ // delete or comment one bracket to delete one item or not
        {
            name: "Fionnan",
            avatarPath: 'assets/home/fionnan.jpg'
        },
        {
            name: "Saoirse",
            avatarPath: 'assets/home/saoirse.jpg'
        },
        {
            name: "Aoife",
            avatarPath: 'assets/home/aoife.jpg'
        },
        {
            name: "Conor",
            avatarPath: 'assets/home/conor.jpg'
        },
        {
            name: "Conall",
            avatarPath: 'assets/home/conor.jpg'
        },
        {
            name: "Estelle",
            avatarPath: 'assets/home/aoife.jpg'
        },
        {
            name: "Clément",
            avatarPath: 'assets/home/fionnan.jpg'
        },
        {
            name: "Samuel",
            avatarPath: 'assets/home/conor.jpg'
        }
    ]

    emitLinksSubject() {
        this.linksSubject.next(this.links.slice()) ;
    }
}