import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { MenuItem } from 'libs/api-interfaces/src';
import { environments } from 'apps/frontend/src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HttpMenuService extends HttpMain {
  public getMenu(roleName: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${environments.apiUrl}menu/${roleName}`);
  }
}
