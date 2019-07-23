import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {

  hMessage: string ;
  pageIndex: number ;

  fMessage = 'Use the arrows to see the another news' ;
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
    this.pageIndex = this.newsService.getPageIndex() ;
  	this.hMessage = this.newsPages[this.pageIndex].title ;
  }

  ngOnDestroy() {
    this.newsPagesSubscription.unsubscribe() ;
  } 
}