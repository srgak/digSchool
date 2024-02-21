import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { LessonData } from 'src/app/helpers/interfaces/user';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { MarksIdService } from 'src/app/services/storage/marks-id/marks-id.service';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {
  public lessons$: Observable<LessonData[]> = this.activeRoute.data.pipe(
    map(data => data['lessons'] as LessonData[])
  );

  constructor(
    private activeRoute: ActivatedRoute,
    private marksId: MarksIdService,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
    this.activeRoute.data.pipe(
      map(data => data['marksId'])
    )
      .subscribe(value => {
        this.marksId.prop = value;
      });
  }
}
