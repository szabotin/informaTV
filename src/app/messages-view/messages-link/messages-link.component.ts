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

	constructor(private messagesService: MessagesService, private messagesPagesService: MessagesPagesService, private router: Router) {}

	onClic() {
		this.messagesService.setPersonIndex(this.serieIndex*4 + this.pageIndex) ;
		this.messagesPagesService.setSerieIndex(this.serieIndex) ;
		this.messagesPagesService.setPageIndex(this.pageIndex) ;
		this.router.navigate(['messages-page']) ;
	}

}

