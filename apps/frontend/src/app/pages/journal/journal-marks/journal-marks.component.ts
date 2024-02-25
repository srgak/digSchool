import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { breadcrumbsProvide } from '../../../helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from '../../../helpers/routes';
import { BREADCRUMBS_URL } from '../../../helpers/tokens/breadcrumbs';
import { TableMarksModule } from '../../../shared/components/tables/table-marks/table-marks.module';
import { requestBreadcrumbs } from '../../../store/actions/breadcrumbs.action';
import { AppState } from '../../../store/state/app.state';
import { MarkValue } from '../../../helpers/interfaces/marks';

@Component({
  templateUrl: './journal-marks.component.html',
  styleUrls: ['./journal-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TableMarksModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.journalMarks)
  ]
})
export class JournalMarksComponent {
  public marks$: Observable<MarkValue[]> = this.activateRoute.data
    .pipe(
      map(data => data['marks'])
    );

  constructor(
    private activateRoute: ActivatedRoute,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
  }
}
