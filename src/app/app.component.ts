import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
//import { PagesService } from './services/pages.service';
// import { Observable } from 'rxjs/Observable';
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

  constructor(/* private pagesService: PagesService, */ private router: Router) {
  }

   ngOnInit() {/*
    this.pagesSubscription = this.pagesService.pageSubject.subscribe(
      (pages: any[]) => {
        this.pages = pages ;
      }
    ) ;
    this.pagesService.emitPageSubject() ;

    this.nbPages = 6 ; 

    this.indexPage = 0 ; */
    
    /*autoRoutings = new Promise(
      (resolve, reject) => {
        resolve(this.pagesService.autoRouting());
      }
    )*/

    // this.autoRouting(this.nbPages) ;

    // go to a special page during development (toggle comment and just change the number of index page you want in the pagesService). Delete when finish to develop

    // this.indexPage = 4 ;
    // this.router.navigate( [this.pages[this.indexPage].linkPage] ) ;
    this.router.navigate( ['home-page'] ) ;

  }

/*   autoRouting(nbPages: number) {
      
    this.router.navigate(['message-page']) ;

    var ms = 1200 ;
    const counter = Observable.interval(ms).take(nbPages - 1) ;
    this.counterSubscription = counter.subscribe(
      (value : number) => {
        this.router.navigate([this.pages[value + 1].linkPage]) ;
      },
      function (err) {
        console.log('Error: ' + err) ;
      },
      function () { console.log("terminé !") }
    ) ;
  }

  ngOnDestroy() {
    this.pagesSubscription.unsubscribe() ;
  }

  getNbPages() {
    return this.pages.length ;
  }  */
}