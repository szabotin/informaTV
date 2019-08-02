import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessagesNavService } from 'src/app/services/messagesNav.service';

@Component({
  selector: 'app-messages-nav',
  templateUrl: './messages-nav.component.html',
  styleUrls: ['./messages-nav.component.scss']
})
export class MessagesNavComponent implements OnInit, OnDestroy {

  messagesLinks: any[] ;
	messagesLinksSubscription: Subscription ;
	
	constructor(private messagesNavService: MessagesNavService) {}

	ngOnInit() {
		this.messagesLinksSubscription = this.messagesNavService.linksSubject.subscribe(
            (links: any[]) => {
              	this.messagesLinks = links ;
            }
		);
		this.messagesNavService.emitLinksSubject() ;
	}

	ngOnDestroy() {
		this.messagesLinksSubscription.unsubscribe() ;
  }

}
