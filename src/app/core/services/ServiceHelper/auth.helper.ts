import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Response } from '../../classes';

@Injectable({
  providedIn: 'root'
})
export class AuthSession {
  public setSession(response: Response<any >) {
    const expiresAt = moment().add(response.data.expire, 'h');

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('expire', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('user', response.data.user.displayName);
  }

  public logout() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expire');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
