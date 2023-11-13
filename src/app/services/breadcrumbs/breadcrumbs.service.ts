import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private _current: Subject<BreadcrumbItem[]> = new Subject();
  public set current(value: Observable<BreadcrumbItem[]>) {
    value.subscribe(this.current);
  }
  public get current(): Subject<BreadcrumbItem[]> {
    return this._current;
  }
}
