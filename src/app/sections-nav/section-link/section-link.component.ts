import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SectionsNavService } from 'src/app/services/sectionsNavService';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesNavService } from 'src/app/services/messagesNav.service';

@Component({
	selector: 'app-section-link',
	templateUrl: './section-link.component.html',
	styleUrls: ['./section-link.component.scss']
})

export class SectionLinkComponent implements OnInit {

	@Input() linkText: string;
	@Input() iconPath: string;
	@Input() indexSection: number;

	sectionLinks: any[] ;
	sectionLinksSubscription: Subscription;

	constructor(private router: Router, 
				private sectionNavService: SectionsNavService,
				private messagesNavService: MessagesNavService,
				private messagesService: MessagesService) { }

	ngOnInit() {
		this.sectionLinksSubscription = this.sectionNavService.linksSubject.subscribe(
			(links: any[]) => {
				this.sectionLinks = links;
			}
		);
		this.sectionNavService.emitLinksSubject();
	}

	onClick() {
		var routing = this.sectionLinks[this.indexSection].routing;
		this.initIndexs(routing);
		this.router.navigate([routing]);
	}

	initIndexs(page: string) {
		switch (page) {
			case 'messages':
				this.messagesService.setPersonIndex(0);
				this.messagesService.setFirstMessageDisplayed(0);
				this.messagesNavService.setPersonIndex(0);
				this.messagesNavService.setFirstPersonLink(0);
				break;
		}
	}

}
