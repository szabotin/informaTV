import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/rx' ;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['../reset.scss', './app.component.scss']
})

export class AppComponent implements OnInit {
	
	constructor(private router: Router) { }

	ngOnInit() {
		this.router.navigate(['start']);
	}
}