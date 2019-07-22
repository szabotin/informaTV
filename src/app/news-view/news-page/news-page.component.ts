import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {

  hMessage = 'News' ;
  fMessage = 'Use the arrows to see the others News' ;
  hfHeight = 'little' ;

  newsPages: any[] ;
  newsPagesSubscription: Subscription ;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {

    this.newsPagesSubscription = this.newsService.newsPagesSubject.subscribe(
      (newsPages: any[]) => {
        this.newsPages = newsPages ;
      }
    ) ;

    this.newsService.emitNewsSubject() ;


    // Get the indexPage from the event title
    // Be carful -> refer to the event titlw in News.service.ts

    // this.indexPage = this.NewsService.getIndexOfPageByTitle('News', this.NewsPages) ; 
  }

  ngOnDestroy() {
    this.newsPagesSubscription.unsubscribe()
  } 
}