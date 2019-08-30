import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
	selector: 'app-news-content',
	templateUrl: './news-content.component.html',
	styleUrls: ['./news-content.component.scss']
})

export class NewsContentComponent implements OnInit {

	categoryIndex: number;
	title: string;
	photoPath: string;
	text: string;

	link: string;

	news: any[];
	newsSubscription: Subscription;

	constructor(private newsService: NewsService) { }

	ngOnInit() { 
		this.newsSubscription = this.newsService.newsSubject.subscribe(
			(news: any[]) => {
				this.news = news;
			}
		);
		this.newsService.emitNewsSubject();

		this.categoryIndex = this.newsService.getCategoryIndex();
		var newsIndex = this.newsService.getNewsIndex();

		this.title = this.news[this.categoryIndex][newsIndex].title;
		this.photoPath = this.news[this.categoryIndex][newsIndex].photoPath;
		this.text = this.news[this.categoryIndex][newsIndex].text;

		this.link="news-content";
	}

	onClick(index: number) {
		this.newsService.setNewsIndex(index);
	}
}
