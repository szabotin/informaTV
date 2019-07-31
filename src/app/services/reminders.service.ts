import { Subject } from 'rxjs/Subject';

export class RemindersService {

    private pageIndex: number ;

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
    
    getPageIndex() {
        return this.pageIndex ;
    }

    getNbPagesToDisplay() {
        return this.reminders.length ;
    }

    setPageIndex(index: number) {
        this.pageIndex = index ;
    }

    setIndexs(index: number) {
        this.pageIndex = index ;
    }

    getLength() {
        return this.reminders.length ;
    }
}