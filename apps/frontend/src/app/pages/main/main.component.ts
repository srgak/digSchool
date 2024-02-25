import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserData } from '../../helpers/interfaces/user';
import { BREADCRUMBS_URL } from '../../helpers/tokens/breadcrumbs';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  public userData: Observable<UserData> = this.activateRoute.data
    .pipe(
      map(data => data['0'])
    );
  constructor(
    public activateRoute: ActivatedRoute,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
  }
}
