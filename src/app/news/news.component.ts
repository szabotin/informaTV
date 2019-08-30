import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

	categories: any[];
	categorySubscription: Subscription;
  
	constructor(private newsService: NewsService) {}

	ngOnInit() {
		this.categorySubscription = this.newsService.categoriesSubject.subscribe(
			(categories: any[]) => {
				this.categories = categories;
			}
		);
		this.newsService.emitCategoriesSubject();
	}

	onClick(index: number) {
		this.newsService.setCategoryIndex(index);
		this.newsService.setNewsIndex(0);
	}
}
