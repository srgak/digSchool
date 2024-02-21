import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MarkInfo } from 'backend/src/interfaces/marks';
import { Observable, map } from 'rxjs';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { TableMarksModule } from 'src/app/shared/components/tables/table-marks/table-marks.module';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

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
  public marks$: Observable<MarkInfo[]> = this.activateRoute.data
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
