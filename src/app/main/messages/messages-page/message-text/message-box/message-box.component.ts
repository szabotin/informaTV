import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-message-box',
	templateUrl: './message-box.component.html',
	styleUrls: ['./message-box.component.scss']
})

export class MessageBoxComponent implements OnInit {

	@Input() messText: string;
	@Input() messStatus: string;
	@Input() messIndex: number;
	
	constructor() { }

	ngOnInit() {
	}

}
