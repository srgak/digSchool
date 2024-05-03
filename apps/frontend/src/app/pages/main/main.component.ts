import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';
import { PAGE_NAME } from '../../helpers/tokens/page-name.token';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public userData$: Observable<UserData> = this.activateRoute.data.pipe(
    map(({ userData }) => userData as UserData),
  );
  constructor(
    public activateRoute: ActivatedRoute,
    @Inject(PAGE_NAME) private readonly page: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        pageName: this.page,
      }),
    );
  }
}
