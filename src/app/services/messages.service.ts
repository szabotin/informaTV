import { Subject } from 'rxjs/internal/Subject';

export class MessagesService {

    private personIndex: number;

    private firstMessageDisplayed: number;
    private nbMessagesMaxDisplayed: number;

    messagesSubject = new Subject<any[]>();

    private messages = [ // delete or comment one bracket to delete one item or not
        [ // Person
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Hey Kevin ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
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
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
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
                text: "Hi mum ! It's Aoife ! I hope you are doing well ! I wanted to inform you that Aoife is pregnant !",
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
                audioSource: "",
            },
            {
                date: "30th July 2018", // should be a date format
                type: "Text",
                status: "Old",
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
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
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
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
                text: "Did you see the weather in the TV? The weather will be so well tomorrow. We can see each other in Phoenix Park",
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
                text: "My dog is dead. I don't know why",
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
            }
        ]
    ]

    emitMessagesSubject() {
        this.messagesSubject.next(this.messages.slice());
    }

    getPersonIndex() {
        return this.personIndex;
    }
    getFirstMessageDisplayed() {
        return this.firstMessageDisplayed;
    }
    getNbMessagesMaxDisplayed() {
        return this.nbMessagesMaxDisplayed;
    }

    getNbPagesToDisplay() {
        var nbPages: number = 0;

        for (var i = 0 ; i < this.messages.length ; i++) {
            nbPages += Math.floor((this.messages[i].length - 1) / this.nbMessagesMaxDisplayed) + 1 ;
        }

        return nbPages ;
    }

    setPersonIndex(index: number) {
        this.personIndex = index;
    }
    setFirstMessageDisplayed(index: number) {
        this.firstMessageDisplayed = index;
    }
    setNbMessagesMaxDisplayed(index: number) {
        this.nbMessagesMaxDisplayed = index;
    }

    setIndexs(index: number) { // set indexs in the right way
        var personIndex = 0;
        var firstMessageIndex = 0;
        
        for (var i = 0 ; i < index ; i++) { // change : we can avoid this loop for every indexes
            firstMessageIndex += 3;
            if (firstMessageIndex >= this.messages[personIndex].length) {
                firstMessageIndex = 0;
                personIndex++;
            }
        }

        this.personIndex = personIndex;
        this.firstMessageDisplayed = firstMessageIndex;

        return personIndex;
    }
}