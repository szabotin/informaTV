import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  isAudio = false;
  isVideo = false;
  isText = true;

  oneMessage = false;
  severalMessages = true;

  headerMessage = "Messages from Clement" ;
  footerMessage = "Click on what you want to see" ;
  
  constructor() { }

  ngOnInit() {
  }

}
