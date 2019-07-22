import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss','./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerHeight: string ;
  @Input() headerMessage: string ;

  constructor() {
  }

  ngOnInit() {
  }
}

