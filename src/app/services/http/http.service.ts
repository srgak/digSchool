import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthForm, UserAuthResponse, UserData } from 'src/app/helpers/interfaces/user';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

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
  public getUserData(id?: number): Observable<UserData> {
    return this.http.get<UserData>(`${environments.apiUrl}users/${id}`);
  }
  public getUserList(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${environments.apiUrl}users`);
  }
  public editUserData(id: number, data: UserData): Observable<UserData> {
    return this.http.put<UserData>(`${environments.apiUrl}users/${id}`, data);
  }
  public deleteUserData(id: number): Observable<any> {
    return this.http.delete(`${environments.apiUrl}users/${id}`);
  }
}
