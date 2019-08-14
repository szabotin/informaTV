import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
 
  headerText = "Reminders" ;
  footerText = "Click on what you want to see" ;
 
  constructor() { }

  ngOnInit() {
  }

}
