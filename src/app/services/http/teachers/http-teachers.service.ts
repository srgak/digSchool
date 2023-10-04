import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpTeachersService extends HttpMain {
  public getTeachers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${environments.apiUrl}users?role=teacher`);
  }
  public getTeachersLesson(lesson: string): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${environments.apiUrl}users?role=teacher&teachLesson=${lesson}`);
  }
}
