import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-link',
  templateUrl: './news-link.component.html',
  styleUrls: ['./news-link.component.scss']
})
export class NewsLinkComponent {

  @Input() pageIndex: number ;
  @Input() photoPath: string ;
  
  constructor(private newsService: NewsService, private router: Router) { 
  }

  onClic() {
    this.newsService.setPageIndex(this.pageIndex) ;
    this.router.navigate(['news-page']) ;
  }
}