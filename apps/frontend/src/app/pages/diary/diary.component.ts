import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { BREADCRUMBS_URL } from '../../helpers/tokens/breadcrumbs';
import { MarksIdService } from '../../services/storage/marks-id/marks-id.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { LessonData } from 'libs/api-interfaces/src';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryComponent {
  public lessons$: Observable<LessonData[]> = this.activeRoute.data.pipe(
    map((data) => data['lessons'] as LessonData[]),
  );

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly marksId: MarksIdService,
    @Inject(BREADCRUMBS_URL) private readonly breadcrumbsUrl: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        url: this.breadcrumbsUrl,
      }),
    );
    this.activeRoute.data.pipe(map((data) => data['marksId'])).subscribe((value) => {
      this.marksId.prop = value;
    });
  }
}
