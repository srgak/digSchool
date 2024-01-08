import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { UserLoginData } from 'src/app/helpers/interfaces/user';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService extends HttpMain {
  public getUserData(id?: number): Observable<UserLoginData> {
    return this.http.get<UserLoginData>(`${environments.apiUrl}users/${id}`);
  }

  public editUserData(data: UserLoginData): Observable<UserLoginData> {
    return this.http.put<UserLoginData>(`${environments.apiUrl}users/${data.id}`, data);
  }

  public deleteUserData(id: number): Observable<{}> {
    return this.http.delete<{}>(`${environments.apiUrl}users/${id}`);
  }
}
