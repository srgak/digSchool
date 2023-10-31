import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpPupilsService extends HttpMain {
  public getPupils(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${environments.apiUrl}users?role=pupil`);
  }
  public getPupilsByClass(className: string): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${environments.apiUrl}users?role=pupil&class=${className}`);
  }
}
