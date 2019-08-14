import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  headerText = "Aoife will come this afternoon" ;
  footerText = "Click on what you want to see" ;
  
  constructor() { }

  ngOnInit() {
  }

}
