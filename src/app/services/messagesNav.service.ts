import { Subject } from 'rxjs/internal/Subject';

export class MessagesNavService {

    private personIndex: number;
    private firstPersonLink: number;
    private numberPersonLinks: number;

    linksSubject = new Subject<any[]>();

    private links = [ // delete or comment one bracket to delete one item or not
        {
            id: 0,
            name: "Fionnan",
            avatarPath: 'assets/main/messages/persons/fionnan.jpg'
        },
        {
            id: 1,
            name: "Saoirse",
            avatarPath: 'assets/main/messages/persons/saoirse.jpg'
        },
        {
            id: 2,
            name: "Aoife",
            avatarPath: 'assets/main/messages/persons/aoife.jpg'
        },
        {
            id: 3,
            name: "Conor",
            avatarPath: 'assets/main/messages/persons/conor.jpg'
        },
        {
            id: 4,
            name: "Conall",
            avatarPath: 'assets/main/messages/persons/conor.jpg'
        },
        {
            id: 5,
            name: "Estelle",
            avatarPath: 'assets/main/messages/persons/aoife.jpg'
        },
        {
            id: 6,
            name: "Clément",
            avatarPath: 'assets/main/messages/persons/fionnan.jpg'
        },
        {
            id: 7,
            name: "Samuel",
            avatarPath: 'assets/main/messages/persons/conor.jpg'
        }
    ];

    emitLinksSubject() {
        this.linksSubject.next(this.links.slice());
    }

    getPersonIndex() {
        return this.personIndex;
    }
    getFirstPersonLink() {
        return this.firstPersonLink;
    }
    getNumberPersonLinks() {
        return this.numberPersonLinks;
    }

    setPersonIndex(index: number) {
        this.personIndex = index;
    }
    setFirstPersonLink(index: number) {
        this.firstPersonLink = index;
    }
    setNumberPersonLinks(index: number) {
        this.numberPersonLinks = index;
    }
}