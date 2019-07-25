import { Subject } from 'rxjs/Subject';

export class RemindersService {

    private serieIndex: number ;

    remindersSubject = new Subject<any[]>() ;
    
    private reminders = [ // delete or comment one bracket to delete one reminders or not
        [ // Series of 3 reminders
            "Don't forget to take your pills after lunch !",
            "Aoife will come around 6 this afternoon", 
            "You will have an appointment with the doctor on Monday at 9am"
        ],
        [ // Series of 3 reminders
            "Aoife will come around 6 this afternoon" ,
            "You will have an appointment with the doctor on Monday at 9am",
            "Don't forget to take your pills after lunch !" 
        ]
    ] ;

    emitRemindersSubject() {
        this.remindersSubject.next(this.reminders.slice()) ;
    }
    
    getSerieIndex() {
        return this.serieIndex ;
    }

    setSerieIndex(index: number) {
        this.serieIndex = index ;
    }

    getLength() {
        return this.reminders.length ;
    }
}