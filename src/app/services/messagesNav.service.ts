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
            avatarPath: 'assets/main/messages/persons/fionnan.jpg',
            selected: false
        },
        {
            id: 1,
            name: "Saoirse",
            avatarPath: 'assets/main/messages/persons/saoirse.jpg',
            selected: false
        },
        {
            id: 2,
            name: "Aoife",
            avatarPath: 'assets/main/messages/persons/aoife.jpg',
            selected: false
        },
        {
            id: 3,
            name: "Conor",
            avatarPath: 'assets/main/messages/persons/conor.jpg',
            selected: false
        },
        {
            id: 4,
            name: "Conall",
            avatarPath: 'assets/main/messages/persons/conor.jpg',
            selected: false
        },
        {
            id: 5,
            name: "Estelle",
            avatarPath: 'assets/main/messages/persons/aoife.jpg',
            selected: false
        },
        {
            id: 6,
            name: "Clément",
            avatarPath: 'assets/main/messages/persons/fionnan.jpg',
            selected: false
        },
        {
            id: 7,
            name: "Annelise",
            avatarPath: 'assets/main/messages/persons/aoife.jpg',
            selected: false
        },
        {
            id: 8,
            name: "Samuel",
            avatarPath: 'assets/main/messages/persons/conor.jpg',
            selected: false
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

    setIndexs(index: number) {
        this.personIndex = index;
        
        if (index < this.links.length - (this.numberPersonLinks - 1))
            this.firstPersonLink = index;

        this.select(this.personIndex);
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

    select(index: number) { // always see all the indexes. May just set selected = 0 to the previous selected and set 1 for the new.
        this.links[index].selected = true;
        
        for (var i = 0 ; i < this.links.length ; i++) {
            if (this.links[i].selected && i != index) {
                this.links[i].selected = false;
            } 
        }

        this.emitLinksSubject() ;
    }
}