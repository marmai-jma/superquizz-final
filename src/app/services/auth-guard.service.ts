import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService
      .isLoggedIn()
      .do((isSignedIn: boolean) => {
        if (isSignedIn === false) {
          alert('Vous devez être identifié pour accéder à cette page');
          this.router.navigate(['/login']);
        }
      });
  }
}
