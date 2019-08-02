import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages-link',
  templateUrl: './messages-link.component.html',
  styleUrls: ['./messages-link.component.scss']
})

export class MessagesLinkComponent implements OnInit {

	@Input() name: string;
	@Input() avatarPath: string;
	@Input() personIndex: number;

	messagesLinks: any[] ;
	messagesLinksSubscription: Subscription ;

	constructor(private router: Router,
				private messagesService: MessagesService) {}

	ngOnInit() {}

	onClick() {
		this.messagesService.setMessageIndex(0) ;
		this.router.navigate['messages-page'] ;
	}
}
