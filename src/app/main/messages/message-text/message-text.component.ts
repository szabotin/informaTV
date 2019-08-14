import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessagesNavService } from 'src/app/services/messagesNav.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.scss']
})
export class MessageTextComponent implements OnInit {
	
	hText: string;
	fText: string;
	name: string;

	hfHeight = 'little';
	
	persons: any[];
	personsSubscription: Subscription;

	messages: any[];
	messagesSubscription: Subscription;

	personIndex: number;
	firstMessageDisplayed: number;
	lastMessageDisplayed: number;
	
	constructor(/*private globalService: GlobalService,*/
				private messagesNavService: MessagesNavService,
				private messagesService: MessagesService) { }
	
	ngOnInit() {

		// Subscription
		
		this.personsSubscription = this.messagesNavService.linksSubject.subscribe(
			(persons: any[]) => {
				this.persons = persons;
			}
		);
		this.messagesNavService.emitLinksSubject();
		
		this.messagesSubscription = this.messagesService.messagesSubject.subscribe(
			(messages: any[]) => {
				this.messages = messages;
			}
			);
		this.messagesService.emitMessagesSubject();

		// Display the header text depends on the person

		this.personIndex = this.messagesNavService.getPersonIndex();
		this.name = this.persons[this.personIndex].name ;

		this.hText = 'Messages with ' + this.name;
		this.fText = 'Here are your messages with ' + this.name + '. Use the arrows to see others messages';

		this.messagesService.setNbMessagesDisplayed(3);

		this.firstMessageDisplayed = this.messagesService.getFirstMessageDisplayed();
		this.lastMessageDisplayed = this.firstMessageDisplayed + this.messagesService.getNbMessagesDisplayed();
	}

	ngOnDestroy() {
		this.personsSubscription.unsubscribe();
	}


	/*isAutoRouting() {
		return this.globalService.getIsAutoRouting();
	}*/

	/* 	isFirstPage() {
		return this.messagesSerieIndex == 0;
	}
	isLastPage() {
		return this.messagesSerieIndex >= this.messages[this.personSerieIndex][this.personIndex].length - 1;
	}

	onClickLeft() {
		if (this.messagesSerieIndex > 0)
			this.messagesSerieIndex--;
	}
	onClickRight() {
		if (this.messagesSerieIndex < this.messages.length)
			this.messagesSerieIndex++;
	} */


}
