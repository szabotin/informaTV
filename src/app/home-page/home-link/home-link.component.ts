import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home-link',
  templateUrl: './home-link.component.html',
  styleUrls: ['../../../reset.scss', '../../app.component.scss', '../home-page.component.scss', './home-link.component.scss']
})
export class HomeLinkComponent implements OnInit {
  @Input() linkTitle : string ;
  @Input() reference : string ;
  @Input() imageSource : string ;

  links: any[] ;
  linksSubscription: Subscription ;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.linksSubscription = this.homeService.linkSubject.subscribe(
      (links: any[]) => {
        this.links = links ;
      }
    ) ;
    this.homeService.emitLinkSubject() ;
  }

}
