import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-link',
  templateUrl: './news-link.component.html',
  styleUrls: ['./news-link.component.scss']
})
export class NewsLinkComponent {

  @Input() photoPath: string ;
  
  constructor(private router: Router) { 
  }

  onClic() {
    this.router.navigate(['news-page']) ;
  }
}