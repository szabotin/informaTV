import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit, OnDestroy {
  
  hMessage = 'News' ;
  fMessage = 'Click on the event you want to see. Use the arrows to see the others news' ;
  hfHeight = 'big' ;

  newsPages: any[] ;
  newsPagesSubscription: Subscription ;

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    this.newsPagesSubscription = this.newsService.newsPagesSubject.subscribe(
      (newsPages: any[]) => {
        this.newsPages = newsPages ;
      }
    ) ;

    this.newsService.emitNewsSubject() ;
   
  }

  ngOnDestroy() {
    this.newsPagesSubscription.unsubscribe() ;
  }
}