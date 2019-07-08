import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['../../../../reset.scss', '../../../app.component.scss',  '../../messages-view.component.scss', './message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() messText : string ;
  @Input() messStatus : string ;
  @Input() messIndex : number ;

  constructor(private messService: MessagesService) { }

  ngOnInit() {
  }

  /*messRead() {
    this.messService.messNewToOld(this.messIndex) ;
  }

  getColor() {
    if (this.messStatus === "new") {
      return "green" ;
    }
    else if (this.messStatus === "old") {
      return "black" ;
    }
    else {
      return "blue" ;
    }
  }
  getWeight() {
    if (this.messStatus === "new") {
      return 700 ;
    }
    else if (this.messStatus === "old") {
      return 400 ;
    }
    else {
      return 200 ;
    }
  }*/

  getStatus() {
    this.messStatus ;
  }

  getMessage() {
    this.messText ;
  }

  onClic() {
    console.log("hey") ;
    //this.style.color = "blue" ;
  }


}
