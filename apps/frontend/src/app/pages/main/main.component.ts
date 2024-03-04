import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { BREADCRUMBS_URL } from '../../helpers/tokens/breadcrumbs';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public userData: Observable<UserData> = this.activateRoute.data.pipe(map((data) => data['0']));
  constructor(
    public activateRoute: ActivatedRoute,
    @Inject(BREADCRUMBS_URL) private readonly breadcrumbsUrl: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        url: this.breadcrumbsUrl,
      }),
    );
  }
}
