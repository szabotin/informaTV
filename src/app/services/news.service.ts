import { Subject } from 'rxjs/Subject';

export class NewsService {

    private newsSerieIndex: number ;
    private newsIndex: number ;

    newsPagesSubject = new Subject<any[]>() ;
    
    private newsPages = [ // delete or comment one bracket to delete one news or not
        [ // Series of 3 news
            {
                title: "Car accident",
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
                title: "Hot weather but still raining",
                photoPath: "assets/news/weather.jpg",
                text: "Keep those brollies and raincoats at the ready as Ireland's disappointingly damp summer looks set to continue.\
                The country is set for more showers this week, with things getting worse on Thursday and Friday.\
                The good news is that there will be at least two days of warm, humid conditions.\
                Today and tomorrow, temperatures could soar to 25C - but not the 28C forecast last week - with the best of the conditions in the east."
            },
            {   
                title: "Laser eye surgery",
                photoPath: "assets/news/laser.jpg",
                text: "Thanks to groundbreaking advances in technology, scientists have managed to make laser eye surgery more effective and affordable than ever before.\
                As any glasses-wearer will tell you, spectacles are hardly a practical choice. You can lose them or break them, and they’re a nightmare when it rains.\
                Contact lenses can cost a fortune every month – and if you forget spares you're in big trouble. Luckily, laser eye surgery is now a real alternative for all.\
                A quick, virtually painless procedure that can take as little as 10 minutes per eye, laser eye gives you freedom from glasses - and nowadays for a far better price. \
                With over 95% of people happy with laser eye surgery results,1 the only question you will ask is - why didn’t I do it sooner?"
            }
        ],
        [ // Series of 3 news
            {   
                title: "Laser eye surgery",
                photoPath: "assets/news/laser.jpg",
                text: "Thanks to groundbreaking advances in technology, scientists have managed to make laser eye surgery more effective and affordable than ever before.\
                As any glasses-wearer will tell you, spectacles are hardly a practical choice. You can lose them or break them, and they’re a nightmare when it rains.\
                Contact lenses can cost a fortune every month – and if you forget spares you're in big trouble. Luckily, laser eye surgery is now a real alternative for all.\
                A quick, virtually painless procedure that can take as little as 10 minutes per eye, laser eye gives you freedom from glasses - and nowadays for a far better price. \
                With over 95% of people happy with laser eye surgery results,1 the only question you will ask is - why didn’t I do it sooner?"
            },
            {
                title: "Car accident",
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
                title: "Hot weather but still raining",
                photoPath: "assets/news/weather.jpg",
                text: "Keep those brollies and raincoats at the ready as Ireland's disappointingly damp summer looks set to continue.\
                The country is set for more showers this week, with things getting worse on Thursday and Friday.\
                The good news is that there will be at least two days of warm, humid conditions.\
                Today and tomorrow, temperatures could soar to 25C - but not the 28C forecast last week - with the best of the conditions in the east."
            }
        ]
    ] ;

    emitNewsSubject() {
        this.newsPagesSubject.next(this.newsPages.slice()) ;
    }
    
    getNewsSerieIndex() {
        return this.newsSerieIndex ;
    }
	getNewsIndex() {
        return this.newsIndex ;
    }

    getNbPagesToDisplay() {
        var nbPages = 0 ;

        for (var i = 0 ; i < this.newsPages.length ; i++) {
            nbPages += this.newsPages[i].length ;
        }

        return nbPages ;
    }

    setSerieIndex(index: number) {
        this.newsSerieIndex = index ;
    }
	setPageIndex(index: number) {
        this.newsIndex = index ;
    }

    setIndexs(index: number) { // this function is similar to the way we count numbers. (units, dozens, hundreds...), ut applied with our structure (newsBoxIndex,newsPageIndex, ...)
        var newsSerieIndex = 0 ;
        var newsIndex = 0 ;
        
        for (var i = 0 ; i < index ; i++) { // change : we can avoid this loop for every indexes
            newsIndex++ ;
            if (newsIndex >= this.newsPages[newsSerieIndex].length) {
                newsIndex = 0 ;
                newsSerieIndex++ ;
            }
        }
        
        this.newsSerieIndex = newsSerieIndex ;
        this.newsIndex = newsIndex ;
    }

    getLength() {
        return this.newsPages.length ;
    }
}