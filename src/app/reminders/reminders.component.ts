import { Component } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['../../reset.scss', './reminders.component.scss']
})

export class RemindersComponent {

  hMessage = 'Reminders' ;
  fMessage = 'Don\'t forget that ! Use the narrows to see other reminders' ;
  hfHeight = 'little' ;
  
  constructor() { }
}