import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RemindersService } from '../services/reminders.service';

@Component({
	selector: 'app-reminders-page',
	templateUrl: './reminders-page.component.html',
	styleUrls: ['./reminders-page.component.scss']
})

export class RemindersPageComponent {

	pageIndex = 0 ;

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
		this.pageIndex = this.remindersService.getPageIndex() ;
	}

	ngOnDestroy() {
		this.remindersSubscription.unsubscribe() ;
	}
	
	isFirstPage() {
		return this.pageIndex == 0 ;
	}
	isLastPage() {
		return this.pageIndex >= this.reminders.length - 1 ;
	}

	onClickLeft() {
		if (this.pageIndex > 0)
			this.pageIndex-- ;
	}
	onClickRight() {
		if (this.pageIndex < this.reminders.length)
			this.pageIndex++ ;
	}
}
