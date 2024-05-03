import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { pageName } from '../../../helpers/routes';
import { TableMarksModule } from '../../../shared/components/tables/table-marks/table-marks.module';
import { requestBreadcrumbs } from '../../../store/actions/breadcrumbs.action';
import { AppState } from '../../../store/state/app.state';
import { MarkInfo } from 'libs/api-interfaces/src';
import { pageNameProvide } from '../../../helpers/providers/page-name';
import { PAGE_NAME } from '../../../helpers/tokens/page-name.token';

@Component({
  templateUrl: './journal-marks.component.html',
  styleUrls: ['./journal-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TableMarksModule],
  providers: [pageNameProvide(pageName.JournalMarks)],
})
export class JournalMarksComponent {
  public marks$: Observable<MarkInfo[]> = this.activateRoute.data.pipe(
    map(({ marks }) => marks as MarkInfo[]),
  );

  constructor(
    private readonly activateRoute: ActivatedRoute,
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
