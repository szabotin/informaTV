import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

	categoryLinks: any[];
	categoryLinksSubscription: Subscription;
  
	constructor(private newsService: NewsService) {}

	ngOnInit() {
		this.categoryLinksSubscription = this.newsService.categoriesSubject.subscribe(
			(categories: any[]) => {
				this.categoryLinks = categories;
			}
		);
		this.newsService.emitCategoriesSubject();
	}

	onClick() {
	}

}
