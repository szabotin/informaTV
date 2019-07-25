import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-box',
  templateUrl: './reminder-box.component.html',
  styleUrls: ['./reminder-box.component.scss']
})
export class ReminderBoxComponent {

  @Input() reminderText: string;

}
