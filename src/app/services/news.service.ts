import { Subject } from 'rxjs/internal/Subject';

export class NewsService {
    
    categoriesSubject = new Subject<any[]>();

    private categories = [ // here are the time-link details. You can add or delete one section easily
        {
            category: "World",
            iconPath: "assets/news/categoryIcons/world.png"
        },
        {
            category: "Ireland",
            iconPath: "assets/news/categoryIcons/ireland.jpg"
        },
        {
            category: "Sports",
            iconPath: "assets/news/categoryIcons/sports.png"
        },
        {
            category: "Music",
            iconPath: "assets/news/categoryIcons/music.jpg"
        }
    ]

    emitCategoriesSubject() {
        this.categoriesSubject.next(this.categories.slice());
    }
}