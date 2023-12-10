import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { getBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private store: Store<AppState> = inject(Store<AppState>);
  public set current(flow: Observable<BreadcrumbItem[]>) {
    flow.subscribe(this.setDataToStore);
  }

  private setDataToStore = (value: BreadcrumbItem[]): void => {
    this.store.dispatch(getBreadcrumbs({
      list: value
    }))
  }
}
