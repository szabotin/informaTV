import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessagesNavService } from 'src/app/services/messagesNav.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
	
	headerText: string;
	
	personIndex: number;
	messageIndex: number;
	messageType: string;

	persons: any[];
	personsSubscription: Subscription;

	messages: any[];
	messagesSubscription: Subscription;

	constructor(private messagesService: MessagesService,
				private messagesNavService: MessagesNavService) {}

	ngOnInit() {
		// Subscriptions

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
		
		var personIndex = this.messagesService.getPersonIndex();
		var messageIndex = this.messagesService.getFirstMessageDisplayed();
		this.messageType = this.messages[personIndex][messageIndex].type; // have to get the type of message by a more proper method

		this.headerText = "Messages with " + this.persons[personIndex].name;
	}

}
