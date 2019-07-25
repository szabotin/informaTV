import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RemindersService } from '../services/reminders.service';

@Component({
	selector: 'app-reminders-page',
	templateUrl: './reminders-page.component.html',
	styleUrls: ['./reminders-page.component.scss']
})

export class RemindersPageComponent {

	serieIndex = 0 ;

	hMessage = 'Reminders' ;
	fMessage = 'Don\'t forget that ! Use the narrows to see other reminders' ;
	hfHeight = 'little' ;
	
	reminders: any[] ;
	remindersSubscription: Subscription ;
	
	constructor(private remindersService: RemindersService) { }
	
	ngOnInit() {
		this.remindersSubscription = this.remindersService.remindersSubject.subscribe(
			(reminders: any[]) => {
				this.reminders = reminders ;
			}
		) ;
		this.remindersService.emitRemindersSubject() ;
	}

	ngOnDestroy() {
		this.remindersSubscription.unsubscribe() ;
	}
	
	isFirstPage() {
		return this.serieIndex == 0 ;
	}
	isLastPage() {
		return this.serieIndex >= this.reminders.length - 1 ;
	}

	onClickLeft() {
		if (this.serieIndex > 0)
			this.serieIndex-- ;
	}
	onClickRight() {
		if (this.serieIndex < this.reminders.length)
			this.serieIndex++ ;
	}
}
