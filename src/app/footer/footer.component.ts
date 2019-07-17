import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss', './footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerMessage : string ;
  @Input() bigMain : boolean ;

  constructor() { }

  ngOnInit() {
  }

}
