import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class MessagesPagesService {

	private serieIndex: number ;
    private pageIndex: number ;

    messPagesSubject = new Subject<any[]>() ;

    constructor(private router: Router) {}

    private messPages = [ // delete or comment one bracket to delete one person or not
		[ // serie of 4 persons
			{
				name: "Fionnan",
				photoPath: "assets/messages-view/fionnan.jpg",
			},
			{
				name: "Saoirse",
				photoPath: "assets/messages-view/saoirse.jpg",
			},
			{  
				name: "Conor",
				photoPath: "assets/messages-view/connor.jpg",
			},
			{  
				name: "Aoife",
				photoPath: "assets/messages-view/aoife.jpg",
			}
		],
        [ // serie of 4 persons
			{
				name: "Clément",
				photoPath: "assets/messages-view/fionnan.jpg",
			},
			{
				name: "Estelle",
				photoPath: "assets/messages-view/saoirse.jpg",
			},
			{  
				name: "Antoine",
				photoPath: "assets/messages-view/connor.jpg",
			},
			{  
				name: "Samuel",
				photoPath: "assets/messages-view/fionnan.jpg",
			}
		]
    ] ;

    emitMessageSubject() {
        this.messPagesSubject.next(this.messPages.slice()) ;
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
        return this.messPages.length ;
    }

    //     this.pageIndex = index ;
    //     this.emitPageIndexSubject() ;
    // }
    
    // allMessNewToOld() {
    //     for (let m of this.mess) {
    //         m.status = "old" ;
    //     }
    //     this.emitMessageSubject() ;
    // }

    //     this.mess[index].status = "old" ;
    //     this.emitMessageSubject() ;
    // }

    // messNew(message) {
    //     message.status = "new" ;
    //     this.emitMessageSubject() ;
    // }

    // addMessage (text: string) {
    //     const messageObject = {
    //       text: '',
    //       status: "new"
    //     } ;
    //     messageObject.text = text ;
    //     this.mess.push(messageObject) ;
    //     this.emitMessageSubject()
    // }
}