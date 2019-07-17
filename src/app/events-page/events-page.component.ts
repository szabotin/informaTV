import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  imageLink = 'assets/events/aoife.jpg' ;
  constructor() { }

  ngOnInit() {    
  }

}
