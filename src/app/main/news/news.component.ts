import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  headerText = "Car accident" ;
  footerText = "Click on what you want to see" ;

  constructor() { }

  ngOnInit() {
  }

}
