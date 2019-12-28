import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  logoImage = '/assets/logo_superquiz.png';

  user = {name: 'Bob'};

  navItems = [
    {label: 'Accueil', path: 'home'},
    {label: 'Quizzes', path: 'quizzes'},
    {label: 'Admin', path: 'admin'},
    {label: 'Login', path: 'login'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
