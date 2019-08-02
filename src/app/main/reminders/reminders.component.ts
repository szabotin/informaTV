import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
 
  headerMessage = "Reminders" ;
  footerMessage = "Click on what you want to see" ;
 
  constructor() { }

  ngOnInit() {
  }

}
