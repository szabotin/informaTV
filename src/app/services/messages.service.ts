import { Subject } from 'rxjs/internal/Subject';

export class MessagesService {

    private personIndex: number;
    private messageIndex: number;

    messagesSubject = new Subject<any[]>() ;

    private messages = [ // delete or comment one bracket to delete one item or not
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
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
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

    emitmessagesSubject() {
        this.messagesSubject.next(this.messages.slice()) ;
    }

    getMessageIndex() {
        return this.messageIndex ;
    }
    getPersonIndex() {
        return this.personIndex ;
    }

    setMessageIndex(index: number) {
        this.messageIndex = index ;
    }
    setpersonIndex(index: number) {
        this.personIndex = index ;
    }
}