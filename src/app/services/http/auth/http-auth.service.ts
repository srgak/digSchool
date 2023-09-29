import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { UserAuthForm, UserAuthResponse, UserData } from 'src/app/helpers/interfaces/user';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService extends HttpMain {
  public register(data: UserData): Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>(`${environments.apiUrl}register`, data);
  }
  public login(data: UserAuthForm): Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>(`${environments.apiUrl}login`, data);
  }
  public checkAuth(token: string): Observable<any> {
    return this.http.get(`${environments.apiUrl}auth`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
