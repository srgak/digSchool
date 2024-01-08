import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { UserAuth, UserAuthForm, UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService extends HttpMain {
  public register(data: UserAuth): Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>(`${environments.apiUrl}register`, data);
  }
  public login(data: UserAuthForm): Observable<UserAuthResponse> {
    return this.http.post<UserAuthResponse>(`${environments.apiUrl}login`, data);
  }
}
