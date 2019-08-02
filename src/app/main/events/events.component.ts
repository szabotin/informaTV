import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  headerMessage = "Aoife will come this afternoon" ;
  footerMessage = "Click on what you want to see" ;
  
  constructor() { }

  ngOnInit() {
  }

}
