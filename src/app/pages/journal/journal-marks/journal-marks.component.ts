import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { notEmptyList } from 'src/app/helpers/pipes/not-empty-list';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { MarksDataService } from 'src/app/services/marks/marks.service';
import { UserTeachLessonService } from 'src/app/services/storage/user-teach-lesson/user-teach-lesson.service';
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
  constructor(
    private activateRoute: ActivatedRoute,
    public marksData: MarksDataService,
    private teachLesson: UserTeachLessonService,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
    marksData.currentMarks$ = activateRoute.data
      .pipe(
        map(data => data['0']),
        switchMap(data => {
          marksData.data$ = new BehaviorSubject(data).asObservable();
          return marksData.data$;
        }),
        switchMap(() => marksData.getCurrentMarks(this.teachLesson.prop)),
        notEmptyList
      )
  }
}
