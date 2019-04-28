import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router/';
import { Injectable } from '@angular/core';
import { AuthSession } from './core/services/ServiceHelper/auth.helper';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private authSession: AuthSession, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url.match('/login')) {
      return this.directLogin();
    } else {
      return this.redirect401();
    }
  }

  private directLogin(): boolean {
    if (this.authSession.isLoggedIn()) {
      this.router.navigate(['chatlist']);
    } else {
      return true;
    }
  }

  private redirect401(): boolean {
    if (this.authSession.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['noacces']);
    }
  }
}
