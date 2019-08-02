import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
	selector: 'app-messages-page',
	templateUrl: './messages-page.component.html',
	styleUrls: ['./messages-page.component.scss']
})

export class MessagesPageComponent implements OnInit, OnDestroy {

	messageType: string;

	constructor(private messageService: MessagesService) {}

	ngOnInit() {
		var personIndex = this.messageService.getPersonIndex() ;
		var messageIndex = this.messageService.getMessageIndex() ;
		this.messageType = this.messageService[personIndex].messages[messageIndex].type ;
	}

	ngOnDestroy() {

	}

}
