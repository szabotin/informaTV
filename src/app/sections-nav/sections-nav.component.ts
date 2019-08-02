import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SectionsNavService } from '../services/sectionsNavService';

@Component({
	selector: 'app-sections-nav',
	templateUrl: './sections-nav.component.html',
	styleUrls: ['./sections-nav.component.scss']
})

export class SectionsNavComponent implements OnInit, OnDestroy {

	sectionLinks: any[] ;
	sectionLinksSubscription: Subscription ;
	
	constructor(private sectionNavService: SectionsNavService) {}

	ngOnInit() {
		this.sectionLinksSubscription = this.sectionNavService.linksSubject.subscribe(
            (links: any[]) => {
              	this.sectionLinks = links ;
            }
		);
		this.sectionNavService.emitLinksSubject() ;
	}

	ngOnDestroy() {
		this.sectionLinksSubscription.unsubscribe() ;
  }
}
