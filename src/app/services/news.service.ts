import { Subject } from 'rxjs/internal/Subject';

export class NewsService {
    
    private categoryIndex: number;
    private newsIndex: number;

    categoriesSubject = new Subject<any[]>();
    newsSubject = new Subject<any[]>();

    private categories = [ // here are the time-link details. You can add or delete one section easily
        {
            title: "World",
            iconPath: "assets/news/categoryIcons/world.png",
            routing: "world"
        },
        {
            title: "Ireland",
            iconPath: "assets/news/categoryIcons/ireland.png",
            routing: "ireland"
        },
        {
            title: "Sports",
            iconPath: "assets/news/categoryIcons/sports.png",
            routing: "sports"
        },
        {
            title: "Music",
            iconPath: "assets/news/categoryIcons/music.jpg",
            routing: "music"
        }
    ]

    /***********************************************************************************************/
    /* In the "news" array, the order of the categories is the same than in the "categories" array */
    /* If you modify the categories, you have to modify the arborescence of this array too         */
    /* Up to you to find another way to modify it in oredr to do it automatically                  */
    /***********************************************************************************************/

    private news = [ // find a way to pick up news for internet. It is just here examples that I have written
        [ // World category
            {
                title: "Car accident",
                photoPath: "assets/news/ireland/accident.jpg",
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
        ],
        [ // Ireland category
            {
                title: "Car accident",
                photoPath: "assets/news/ireland/accident.jpg",
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
                title: "Laser eye surgery",
                photoPath: "assets/news/ireland/laser.jpg",
                text: "Thanks to groundbreaking advances in technology, scientists have managed to make laser eye surgery more effective and affordable than ever before.\
                       As any glasses-wearer will tell you, spectacles are hardly a practical choice. You can lose them or break them, and they’re a nightmare when it rains.\
                       Contact lenses can cost a fortune every month – and if you forget spares you're in big trouble. Luckily, laser eye surgery is now a real alternative for all.\
                       A quick, virtually painless procedure that can take as little as 10 minutes per eye, laser eye gives you freedom from glasses - and nowadays for a far better price. \
                       With over 95% of people happy with laser eye surgery results,1 the only question you will ask is - why didn’t I do it sooner?"
            },
            {
                title: "Car accident",
                photoPath: "assets/news/ireland/accident.jpg",
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
        ],   
        [  // Sport category
            {
                title: "Wales make 14 changes for Ireland in Warren Gatland's final Cardiff Test",
                photoPath: "assets/news/sports/rugby.jpg",
                text: "Warren Gatland has made 14 changes to his starting XV for the Wales side to take on Ireland in Cardiff on Saturday - the Kiwi coach's final game in charge at the Principality Stadium. \
                       Saracens loosehead prop Rhys Carre and Cardiff Blues wing Owen Lane will make their Test debuts, while the side will be captained for the first time by Cardiff Blues back-row Josh Navidi."
            }
        ],
        [ // Music category : not match with the event below ^^
            {
                title: "Wales make 14 changes for Ireland in Warren Gatland's final Cardiff Test",
                photoPath: "assets/news/sports/rugby.jpg",
                text: "Warren Gatland has made 14 changes to his starting XV for the Wales side to take on Ireland in Cardiff on Saturday - the Kiwi coach's final game in charge at the Principality Stadium. \
                       Saracens loosehead prop Rhys Carre and Cardiff Blues wing Owen Lane will make their Test debuts, while the side will be captained for the first time by Cardiff Blues back-row Josh Navidi."
            }
        ]
    ]

    emitCategoriesSubject() {
        this.categoriesSubject.next(this.categories.slice());
    }
    
    emitNewsSubject() {
        this.newsSubject.next(this.news.slice());
    }

    getCategoryIndex () { return this.categoryIndex }
    getNewsIndex     () { return this.newsIndex }

    setCategoryIndex (index: number) { this.categoryIndex = index }
    setNewsIndex     (index: number) { this.newsIndex = index }
}