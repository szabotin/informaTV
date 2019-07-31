/********************************************/
/*   This file contains only the messages.  */
/*     Was created to me more proper        */
/********************************************/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class MessagesService {
    
    private personIndex: number ;
	private messagesSerieIndex: number ;

    messagesSubject = new Subject<any[]>() ;

    constructor() {}

    private messages = [ // delete or comment one bracket to delete one person or not. Should have the same structure like in the messagesPagesService. 
		[ // serie of 4 persons
            [ // one person
                [ // serie of 5 messages
                    { // one message
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    { // another message
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    { // another message
                        text: "I am looking forward to see you again !", 
                        status: "new"
                    },
                    { // another message
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    { // another message
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ],
            [ // another person
                [ // serie of 5 messages
                    {
                        text: "Hello ! I hope that you are doing well !",
                        status: "new"
                    },
                    {
                        text: "The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ],
            [ // another person
                [ // serie of 5 messages
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead.",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ],
            [ // another person
                [ // serie of 5 messages  
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead this morning. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ]
        ],
        [ // serie of 4 persons
            [ // one person
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ],
            [
                [ // serie of 5 messages
                    {
                        text: "Hey ! I hope that you are fine !",
                        status: "new"
                    },
                    {
                        text: "The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "new"
                    },
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ],
            [
                [ // serie of 5 messages  
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead.",
                        status: "old"
                    }
                ]
            ],
            [
                [ // serie of 5 messages  
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you !", 
                        status: "new"
                    },
                    {
                
                        text: "Maybe he has eaten something wrong...", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead this morning. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "new"
                    },
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "old"
                    }
                ],
                [ // serie of 5 messages
                    {
                        text: "Hello ! I hope you are doing well ! I wanted to inform you that my daughter is pregnant !",
                        status: "new"
                    },
                    {
                        text: "Maybe he has eaten something wrong...", 
                        status: "new"
                    },
                    {
                        text: "My dog is dead. I don't know why",
                        status: "new"
                    },
                    {
                        text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                        status: "old"
                    },
                    {
                        text: "I am looking forward to see you again !", 
                        status: "old"
                    }
                ]
            ]
        ]
    ] ;

    emitMessagesSubject() {
        this.messagesSubject.next(this.messages.slice()) ;
    }

	getMessagesSerieIndex() {
        return this.messagesSerieIndex ;
    }

    getPersonIndex() {
        return this.personIndex ;
    }

    getNbPagesToDisplay() {
        var nbPages: number = 0 ;

        for (var i = 0 ; i < this.messages.length ; i++) {
            for (var j = 0 ; j < this.messages[i].length ; j++)
                nbPages += this.messages[i][j].length ;
        }

        return nbPages ;
    }

    setMessagesSerieIndex(index: number) {
        this.messagesSerieIndex = index ;
    }

    setPersonIndex(index: number) {
        this.personIndex = index ;
    }

    setIndexs(index: number) { // set indexs in the right way
        var indexsToReturn = {}
        
        var personSerieIndex = 0 ;
        var personIndex = 0 ;
        var serieIndex = 0 ;
        
        for (var i = 0 ; i < index ; i++) { // change : we can avoid this loop for every indexes
            serieIndex++ ;
            if (serieIndex >= this.messages[personSerieIndex][personIndex].length) {
                serieIndex = 0 ;
                personIndex++ ;
                if (personIndex >= this.messages[personSerieIndex].length) {
                    personIndex = 0 ;
                    personSerieIndex++ ;
                }
            }
        }

        this.personIndex = personIndex ;
        this.messagesSerieIndex = serieIndex ;

        indexsToReturn[0] = personSerieIndex ;
        indexsToReturn[1] = personIndex ;

        return indexsToReturn ;
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