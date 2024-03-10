import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'libs/api-interfaces/src';
import { environments } from 'apps/frontend/src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HttpBreadcrumbsService extends HttpMain {
  public getBreadcrumbs(pageName: string): Observable<BreadcrumbItem[]> {
    return this.http.get<BreadcrumbItem[]>(`${environments.apiUrl}breadcrumbs/${pageName}`);
  }
}
