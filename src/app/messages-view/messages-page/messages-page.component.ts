import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesPagesService } from 'src/app/services/messagesPages.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
	selector: 'app-messages-page',
	templateUrl: './messages-page.component.html',
	styleUrls: ['../../../reset.scss', './messages-page.component.scss']
})

export class MessagesPageComponent implements OnInit, OnDestroy {
  
	messagesSerieIndex: number;
	personSerieIndex: number ;
	personIndex: number ;
	
	hMessage: string ;
	fMessage: string ;
	name: string ;

	hfHeight = 'little' ;
	
	messagesPages: any[] ;
	messagesPagesSubscription: Subscription ;
	
	messages: any[] ;
	messagesSubscription: Subscription ;
	
	constructor(private globalService: GlobalService,
				private messagesPagesService: MessagesPagesService, 
				private messagesService: MessagesService) { }
	
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
		this.messagesService.emitMessagesSubject() ;

		// Display the message depends on the person
		
		this.personSerieIndex = this.messagesPagesService.getSerieIndex() ;
		this.personIndex = this.messagesPagesService.getPersonIndex() ;
		this.name = this.messagesPages[this.personSerieIndex][this.personIndex].name ; // "person" is like "messagesLink"

		this.hMessage = 'Messages with ' + this.name ;
		this.fMessage = 'Here are your messages with ' + this.name + '. Use the arrows to see others messages' ;

		this.messagesSerieIndex = this.messagesService.getMessagesSerieIndex() ;
	}

	ngOnDestroy() {
		this.messagesSubscription.unsubscribe() ;
		this.messagesPagesSubscription.unsubscribe() ;
	}


	isAutoRouting() {
		return this.globalService.getIsAutoRouting() ;
	}
	isFirstPage() {
		return this.messagesSerieIndex == 0 ;
	}
	isLastPage() {
		return this.messagesSerieIndex >= this.messages[this.personSerieIndex][this.personIndex].length - 1 ;
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