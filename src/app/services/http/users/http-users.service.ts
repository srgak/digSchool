import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { UserData } from 'src/app/helpers/interfaces/user';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService extends HttpMain {
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
