import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()

export class MessagesService {
    
    messageSubject = new Subject<any[]>() ;
    
    private mess = [ // delete or comment one bracket to delete one person or not
        {
            name : "Fionnan",
            photoPath : "assets/messages-view/fionnan.jpg",
            page : [ // may put it in another service
                {
                    text : "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                    status : "new"
                },
                {
                    text : "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                    status : "new"
                },
                {
                    text : "I am looking forward to see you again !", 
                    status : "new"
                },
                {
            
                    text : "Maybe he has eaten something wrong...", 
                    status : "old"
                },
                {
                    text : "My dog is dead. I don't know why",
                    status : "old"
                }
            ]
        },
        {
            name : "Saoirse",
            photoPath : "assets/messages-view/saoirse.jpg",
            page : [ // may put it in another service
                {
                    text : "Hello ! I hope that you are doing well !",
                    status : "new"
                },
                {
                    text : "The weather will be so well tomorrow. We can see each other in Phoenix Park",
                    status : "new"
                },
                {
                    text : "I am looking forward to see you again !", 
                    status : "new"
                },
                {
            
                    text : "Maybe he has eaten something wrong...", 
                    status : "old"
                },
                {
                    text : "My dog is dead. I don't know why",
                    status : "old"
                }
            ]
        },
        {   
            name : "Connor",
            photoPath : "assets/messages-view/connor.jpg",
            page : [ // may put it in another service
                {
                    text : "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                    status : "new"
                },
                {
                    text : "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                    status : "new"
                },
                {
                    text : "I am looking forward to see you again !", 
                    status : "new"
                },
                {
            
                    text : "Maybe he has eaten something wrong...", 
                    status : "old"
                },
                {
                    text : "My dog is dead.",
                    status : "old"
                }
            ]
        },
        {   
            name : "Aoife",
            photoPath : "assets/messages-view/aoife.jpg",
            page : [ // may put it in another service
                {
                    text : "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                    status : "new"
                },
                {
                    text : "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                    status : "new"
                },
                {
                    text : "I am looking forward to see you !", 
                    status : "new"
                },
                {
            
                    text : "Maybe he has eaten something wrong...", 
                    status : "old"
                },
                {
                    text : "My dog is dead. I don't know why",
                    status : "old"
                }
            ]
        }
    ] ;

    emitMessageSubject() {
        this.messageSubject.next(this.mess.slice()) ;
    }

    // allMessNewToOld() {
    //     for (let m of this.mess) {
    //         m.status = "old" ;
    //     }
    //     this.emitMessageSubject() ;
    // }

    // messNewToOld(index : number) {
    //     this.mess[index].status = "old" ;
    //     this.emitMessageSubject() ;
    // }

    // messNew(message) {
    //     message.status = "new" ;
    //     this.emitMessageSubject() ;
    // }

    // addMessage (text: string) {
    //     const messageObject = {
    //       text : '',
    //       status : "new"
    //     } ;
    //     messageObject.text = text ;
    //     this.mess.push(messageObject) ;
    //     this.emitMessageSubject()
    // }
}