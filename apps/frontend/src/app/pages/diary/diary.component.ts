import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { MarksIdService } from '../../services/storage/marks-id/marks-id.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { LessonData } from 'libs/api-interfaces/src';
import { PAGE_NAME } from '../../helpers/tokens/page-name.token';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryComponent {
  public lessons$: Observable<LessonData[]> = this.activateRoute.data.pipe(
    map(({ lessons }) => lessons as LessonData[]),
  );

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly marksId: MarksIdService,
    @Inject(PAGE_NAME) private readonly page: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        pageName: this.page,
      }),
    );
    this.activateRoute.data.pipe(map(({ marksId }) => marksId as number)).subscribe((value) => {
      this.marksId.prop = value;
    });
  }
}
