import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { MenuData } from 'src/app/helpers/interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMenuService extends HttpMain {
  public getMenu(urlRequest: string): Observable<MenuData> {
    return this.http.get<MenuData>(urlRequest);
  }
}
