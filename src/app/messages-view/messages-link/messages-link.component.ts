import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesPagesService } from 'src/app/services/messagesPages.service';

@Component({
  selector: 'app-messages-link',
  templateUrl: './messages-link.component.html',
  styleUrls: ['../../../reset.scss', './messages-link.component.scss']
})

export class MessagesLinkComponent {

	@Input() serieIndex: number ;
	@Input() pageIndex: number ;
	@Input() name: string ;
	@Input() photoPath: string ;

	nbPeopleInOnePage = 4 ;

	constructor(private messagesService: MessagesService, private messagesPagesService: MessagesPagesService, private router: Router) {}

	onClic() {
		this.messagesPagesService.setSerieIndex(this.serieIndex) ;
		this.messagesPagesService.setPersonIndex(this.pageIndex) ;
		this.messagesService.setPersonIndex(this.serieIndex*this.nbPeopleInOnePage + this.pageIndex) ;
		this.messagesService.setMessagesSerieIndex(0) ;
		this.router.navigate(['messages-page']) ;
	}

}

