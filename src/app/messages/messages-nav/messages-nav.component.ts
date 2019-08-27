import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessagesNavService } from 'src/app/services/messagesNav.service';

@Component({
  selector: 'app-messages-nav',
  templateUrl: './messages-nav.component.html',
  styleUrls: ['./messages-nav.component.scss']
})
export class MessagesNavComponent implements OnInit, OnDestroy {

	personLinks: any[];
	personLinksSubscription: Subscription;

	firstPersonLink: number;
	lastPersonLink: number;
	nbPersonLinks: number;
	
	constructor(private messagesNavService: MessagesNavService) {}

	ngOnInit() {
		this.personLinksSubscription = this.messagesNavService.linksSubject.subscribe(
            (links: any[]) => {
              	this.personLinks = links;
            }
		);
		this.messagesNavService.emitLinksSubject();
		
		this.messagesNavService.setNumberPersonLinks(4);

		this.firstPersonLink = this.messagesNavService.getFirstPersonLink();
		this.lastPersonLink = this.firstPersonLink + this.messagesNavService.getNumberPersonLinks();
	}

	ngOnDestroy() {
		this.personLinksSubscription.unsubscribe();
  	}
}