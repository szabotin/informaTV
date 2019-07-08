import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PagesService } from './services/pages.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../reset.scss', './app.component.scss']
})

export class AppComponent implements OnInit {
  pages: any[] ;
  pagesSubscription: Subscription ;
  counterSubscription: Subscription ;
  indexPage: number ;
  nbPages:number ;

  constructor(private pagesService: PagesService, private router: Router) {
  }

  ngOnInit() {
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;
    this.pagesService.emitPageSubject() ;

    this.nbPages = this.getNbPages() ; 

    this.indexPage = 0 ;

    /*autoRoutings = new Promise(
      (resolve, reject) => {
        resolve(this.pagesService.autoRouting());
      }
    )*/

    this.autoRouting(this.nbPages) ;
  }

  autoRouting(nbPages: number) {
      
    this.router.navigate(['newMessages']) ;

    var ms = 1500 ;
    const counter = Observable.interval(ms) ;
    this.counterSubscription = counter.subscribe(
    (value : number) => {
      this.indexPage = value + 1 ;
      if (value < nbPages - 1) {
        this.router.navigate([this.pages[value + 1].linkPage]) ;
      }
      else {
        this.router.navigate(['']) ;
        this.indexPage = nbPages - 1 ;
      }
    }
    ) ;
  }

  ngOnDestroy() {
    this.pagesSubscription.unsubscribe() ;
  }

  getNbPages() {
    return this.pages.length ;
  }
}