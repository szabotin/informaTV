import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.services';

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

	messPages: any[] ;
	messageSubscription: Subscription ;

	constructor(private messService: MessagesService, private router: Router) {}

	onClic() {
		this.messService.setSerieIndex(this.serieIndex) ;
		this.messService.setPageIndex(this.pageIndex) ;
		this.router.navigate(['messages-page']) ;
	}

}

