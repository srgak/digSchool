import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from '../../../helpers/interfaces/breadcrumbs';

@Injectable({
  providedIn: 'root'
})
export class HttpBreadcrumbsService extends HttpMain {
  public getBreadcrumbs(urlRequest: string): Observable<BreadcrumbItem[]> {
    return this.http.get<BreadcrumbItem[]>(urlRequest);
  }
}
