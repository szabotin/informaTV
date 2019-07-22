import { Subject } from 'rxjs/Subject';

export class NewsService {
    newsPagesSubject = new Subject<any[]>() ;
    
    private newsPages = [ // delete or comment one bracket to delete one person or not
        {
            title: "News 1",
            photoPath: "assets/news/accident.jpg",
            text: "Four men have been charged with murder over the downing of a Malaysia Airlines jet in eastern Ukraine in 2014, killing 298 passengers and crew.\
            Dutch investigators have accused three Russians, Igor Girkin, Sergey Dubinskiy and Oleg Pulatov, and Ukrainian Leonid Kharchenko of \
            involvement. Passenger flight MH17 was en route from Amsterdam to Kuala Lumpur when it was shot down over conflict-hit Ukraine.\
            A court case is scheduled to begin in the Netherlands on 9 March 2020.\
            International arrest warrants have been issued for the four men.\
            On Wednesday, the Dutch-led Joint Investigation Team (JIT) said the four men named were believed to be responsible for transporting \
            the Buk missile used to shoot down flight MH17 over eastern Ukraine.\
            The JIT, which seeks to try the suspects under Dutch law, has previously said it had a 'long list' of persons of interest and appealed \
            again for witnesses as the investigation continues."
        },
        {
            linkText: "News 2",
            photoPath: "assets/news/accident.jpg",
            text: "Four men have been charged with murder over the downing of a Malaysia Airlines jet in eastern Ukraine in 2014, killing 298 passengers and crew.\
            Dutch investigators have accused three Russians, Igor Girkin, Sergey Dubinskiy and Oleg Pulatov, and Ukrainian Leonid Kharchenko of \
            involvement. Passenger flight MH17 was en route from Amsterdam to Kuala Lumpur when it was shot down over conflict-hit Ukraine.\
            A court case is scheduled to begin in the Netherlands on 9 March 2020.\
            International arrest warrants have been issued for the four men.\
            On Wednesday, the Dutch-led Joint Investigation Team (JIT) said the four men named were believed to be responsible for transporting \
            the Buk missile used to shoot down flight MH17 over eastern Ukraine.\
            The JIT, which seeks to try the suspects under Dutch law, has previously said it had a 'long list' of persons of interest and appealed \
            again for witnesses as the investigation continues."
        },
        {   
            linkText: "News 3",
            photoPath: "assets/news/accident.jpg",
            text: "Four men have been charged with murder over the downing of a Malaysia Airlines jet in eastern Ukraine in 2014, killing 298 passengers and crew.\
            Dutch investigators have accused three Russians, Igor Girkin, Sergey Dubinskiy and Oleg Pulatov, and Ukrainian Leonid Kharchenko of \
            involvement. Passenger flight MH17 was en route from Amsterdam to Kuala Lumpur when it was shot down over conflict-hit Ukraine.\
            A court case is scheduled to begin in the Netherlands on 9 March 2020.\
            International arrest warrants have been issued for the four men.\
            On Wednesday, the Dutch-led Joint Investigation Team (JIT) said the four men named were believed to be responsible for transporting \
            the Buk missile used to shoot down flight MH17 over eastern Ukraine.\
            The JIT, which seeks to try the suspects under Dutch law, has previously said it had a 'long list' of persons of interest and appealed \
            again for witnesses as the investigation continues."
        }
    ] ;

    emitNewsSubject() {
        this.newsPagesSubject.next(this.newsPages.slice()) ;
    }
}