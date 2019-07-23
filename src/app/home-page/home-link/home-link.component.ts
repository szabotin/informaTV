import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-link',
	templateUrl: './home-link.component.html',
	styleUrls: ['../../../reset.scss', '../../app.component.scss', '../home-page.component.scss', './home-link.component.scss']
})
export class HomeLinkComponent {
	
	@Input() linkTitle : string ;
	@Input() reference : string ;
	@Input() imageSource : string ;

	constructor(private router: Router) { }

	onClic() {
		this.router.navigate([this.reference]) ;
	}

}
