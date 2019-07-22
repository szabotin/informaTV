import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['../../reset.scss', './reminders.component.scss']
})

export class RemindersComponent implements OnInit {

  hMessage = 'Reminders' ;
  fMessage = 'Don\'t forget that ! Use the narrows to see other reminders' ;
  hfHeight = 'little' ;
  
  constructor() { }

  ngOnInit() {
  }
}