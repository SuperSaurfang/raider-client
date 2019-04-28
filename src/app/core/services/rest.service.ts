import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ChatRoom, User, Response, Message } from '../classes';
import { AuthSession } from './ServiceHelper/auth.helper';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private authSession: AuthSession) {
  }

  public getChatList(): Observable<Response<ChatRoom[]>> {
    return this.http.get<Response<ChatRoom[]>>(environment.restEndpoint + '/chatlist')
    .pipe(
      catchError(this.catchError<Response<ChatRoom[]>>('chatlist', null))
    );
  }

  public getMessages(room: string): Observable<Response<Message[]>> {
    return this.http.get<Response<Message[]>>(environment.restEndpoint + '/messages/' + room)
    .pipe(
      catchError(this.catchError<Response<Message[]>>('messages', null))
    );
  }

  public postRegister(data: User): Observable<Response<any>> {
    return this.http.post<Response<any>>(environment.restEndpoint + '/register', data)
    .pipe(
      tap(res => {
        if (res.code === 200) {
          this.authSession.setSession(res);
        } else {
          this.catchError<Response<any>>('register', null);
        }
      }),
      catchError(this.catchError<Response<any>>('register', null))
    );
  }

  public postLogin(data: User): Observable<Response<any>> {
    return this.http.post<Response<any>>(environment.restEndpoint + '/login', data)
    .pipe(
      tap(res => {
        if (res.code === 200) {
          this.authSession.setSession(res);
        } else {
          this.catchError<Response<any>>('login', null);
        }
      }),
      catchError(this.catchError<Response<any>>('login', null))
    );
  }

  public logout() {
    if (this.authSession.isLoggedIn) {
      this.authSession.logout();
    }
  }

  private catchError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
