import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesNavService } from 'src/app/services/messagesNav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-link',
  templateUrl: './messages-link.component.html',
  styleUrls: ['./messages-link.component.scss']
})

export class MessagesLinkComponent implements OnInit {

	@Input() name: string;
	@Input() avatarPath: string;
	@Input() personIndex: number;

	selected: boolean;

	personLinks: any[];
	personLinksSubscription: Subscription;

	constructor(private router: Router,
				private messagesService: MessagesService,
				private messagesNavService: MessagesNavService) {}

	ngOnInit() {
		this.personLinksSubscription = this.messagesNavService.linksSubject.subscribe(
            (links: any[]) => {
              	this.personLinks = links;
            }
		);
		this.messagesNavService.emitLinksSubject();	
		
		this.selected = this.personLinks[this.personIndex].selected;
	}

	onClick() {
		this.messagesService.setPersonIndex(this.personIndex);
		this.messagesService.setFirstMessageDisplayed(0);
		this.messagesNavService.setPersonIndex(this.personIndex);
		this.messagesNavService.select(this.personIndex);

		// Navigation with bad code -> to change

		this.router.navigate(['messages-blank']) ; // don't know how to navigate in the same page by just changing the text in the messages boxes
		setTimeout(() => {
			this.router.navigate(['messages']) ;
		}, 0);
	}
}
