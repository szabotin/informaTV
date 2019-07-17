import { Component, OnInit, Input } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../reset.scss', '../app.component.scss','./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() idPage: number ;

  pages: any[] ;
  pagesSubscription: Subscription ;
  
  titlePage: string ;
  bigMain: boolean ;

  constructor(private pagesService: PagesService) {
    console.log(this.bigMain) ;
  }

  ngOnInit() {
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;
    this.pagesService.emitPageSubject() ;

    this.titlePage = this.pages[this.idPage].title ;
    this.bigMain = this.pages[this.idPage].bigMain ;
  }

  getBigMain() {
    console.log(this.bigMain) ;
    return this.bigMain ;
  }

}
