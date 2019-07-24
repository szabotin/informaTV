import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from '../services/messages.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-messages-view',
	templateUrl: './messages-view.component.html',
	styleUrls: ['../../reset.scss', './messages-view.component.scss']
})

export class MessagesViewComponent implements OnInit, OnDestroy {

	serieIndex = 0 ;
	
	hMessage = 'Messages' ;
	fMessage = 'Choose the person you want to see the messages with. Click on the arrows to see another persons' ;
	hfHeight = 'big' ;

	messPages: any[] ;
	messPagesSubscription: Subscription ;

	constructor(private messagesService: MessagesService) { }

	ngOnInit() {
		this.messPagesSubscription = this.messagesService.messPagesSubject.subscribe(
			(messPages: any[]) => {
				this.messPages = messPages ;
			}
		);
		this.messagesService.emitMessageSubject() ;
	}

	ngOnDestroy() {
		this.messPagesSubscription.unsubscribe() ;
	}

	isFirstPage() {
		return this.serieIndex == 0 ;
	}
	isLastPage() {
		return this.serieIndex >= this.messPages.length - 1 ;
	}

	onClickLeft() {
		if (this.serieIndex > 0)
			this.serieIndex-- ;
	}
	onClickRight() {
		if (this.serieIndex < this.messPages.length)
			this.serieIndex++ ;
	}
}

