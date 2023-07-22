import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  buttons: {description: string, link: string}[];

  constructor(private router: Router) {
    this.buttons = [
      {
        description: 'angular-portfolio.navbar.buttons.home',
        link: 'home'
      },
      {
        description: 'angular-portfolio.navbar.buttons.skills',
        link: 'skills'
      },
    ]
  }

  routeTo(link: string) {
    this.router.navigate([link]); 
  }
}
