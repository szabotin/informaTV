import { Subject } from 'rxjs/internal/Subject';

export class MessagesService {

    private personIndex: number;

    private firstMessageDisplayed: number;
    private nbMessagesDisplayed: number;

    messagesSubject = new Subject<any[]>() ;

    private messages = [ // delete or comment one bracket to delete one item or not
        [ // Person
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Have you seen the weather on the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "I am looking forward to see you again !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Maybe he has eaten something wrong...", 
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
                videoSource: "",
                audioSource: ""
            }
        ],
        [
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! It's Saoirse ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: "",
            }
        ],
        [
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! It's Aoife ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: "",
            }
        ],
        [
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! It's Conor ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: "",
            }
        ],
        [
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: "",
            }
        ],
        [
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hi mum ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
                videoSource: "",
                audioSource: ""
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "My dog is dead. I don't know why",
                videoSource: "",
                audioSource: "",
            }
        ],
    ]

    emitMessagesSubject() {
        this.messagesSubject.next(this.messages.slice()) ;
    }

    getPersonIndex() {
        return this.personIndex ;
    }
    getFirstMessageDisplayed() {
        return this.firstMessageDisplayed ;
    }
    getNbMessagesDisplayed() {
        return this.nbMessagesDisplayed ;
    }

    setPersonIndex(index: number) {
        this.personIndex = index ;
    }
    setFirstMessageDisplayed(index: number) {
        this.firstMessageDisplayed = index ;
    }

    setNbMessagesDisplayed(index: number) {
        this.nbMessagesDisplayed = index ;
    }
}