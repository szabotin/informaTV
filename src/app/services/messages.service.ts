import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class MessagesService {

    private personIndex: number ;
	private serieIndex: number ;

    messagesSubject = new Subject<any[]>() ;

    constructor() {}

    private messages = [ // delete or comment one bracket to delete one person or not
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
        [
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
			]
		]
    ] ;

    emitMessageSubject() {
        this.messagesSubject.next(this.messages.slice()) ;
    }

	getSerieIndex() {
        return this.serieIndex ;
    }

    getPersonIndex() {
        return this.personIndex ;
    }
	
    setSerieIndex(index: number) {
        this.serieIndex = index ;
    }

    setPersonIndex(index: number) {
        this.personIndex = index ;
    }

    getLength() {
        return this.messages.length ;
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