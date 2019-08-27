import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})

export class MessageBoxComponent implements OnInit {

	@Input() mText: string;
	@Input() mStatus: string;
  @Input() index: number;
  
  constructor() {}

  ngOnInit() {}
}