import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesPagesService } from 'src/app/services/messagesPages.service';

@Component({
	selector: 'app-messages-page',
	templateUrl: './messages-page.component.html',
	styleUrls: ['../../../reset.scss', './messages-page.component.scss']
})

export class MessagesPageComponent implements OnInit, OnDestroy {
  
	messagesSerieIndex = 0 ;

	personIndex: number ;
	pageSerieIndex: number ;
	pageIndex: number ;
	
	hMessage: string ;
	fMessage: string ;
	name: string ;

	hfHeight = 'little' ;
	
	messagesPages: any[] ;
	messagesPagesSubscription: Subscription ;
	
	messages: any[] ;
	messagesSubscription: Subscription ;
	
	constructor(private messagesPagesService: MessagesPagesService, private messagesService: MessagesService) { }
	
	ngOnInit() {
		
		// Subscriptions

		this.messagesPagesSubscription = this.messagesPagesService.messPagesSubject.subscribe(
			(messagesPages: any[]) => {
				this.messagesPages = messagesPages ;
			}
		) ;
		this.messagesPagesService.emitMessageSubject() ;
		
		this.messagesSubscription = this.messagesService.messagesSubject.subscribe(
			(messages: any[]) => {
				this.messages = messages ;
			}
		) ;
		this.messagesService.emitMessageSubject() ;

		// Display the message depends on the person

		this.pageSerieIndex = this.messagesPagesService.getSerieIndex() ;
		this.pageIndex = this.messagesPagesService.getPageIndex() ;
		// console.log("Serie : " + this.pageSerieIndex + " Page : " + this.pageIndex) ;
		this.name = this.messagesPages[this.pageSerieIndex][this.pageIndex].name ;

		this.hMessage = 'Messages with ' + this.name ;
		this.fMessage = 'Here are your messages with ' + this.name + '. Use the arrows to see others messages' ;
		
		this.personIndex = this.messagesService.getPersonIndex() ;
	}

	ngOnDestroy() {
		this.messagesSubscription.unsubscribe() ;
		this.messagesPagesSubscription.unsubscribe() ;
	}

	isFirstPage() {
		return this.messagesSerieIndex == 0 ;
	}
	isLastPage() {
		return this.messagesSerieIndex >= this.messages[this.personIndex].length - 1 ;
	}

	onClickLeft() {
		if (this.messagesSerieIndex > 0)
			this.messagesSerieIndex-- ;
	}
	onClickRight() {
		if (this.messagesSerieIndex < this.messages.length)
			this.messagesSerieIndex++ ;
	}
}