import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { notEmptyList } from 'src/app/helpers/pipes/not-empty-list';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';
import { MarksDataService } from 'src/app/services/marks/marks.service';
import { UserTeachLessonService } from 'src/app/services/storage/user-teach-lesson/user-teach-lesson.service';
import { TableMarksModule } from 'src/app/shared/components/tables/table-marks/table-marks.module';

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
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    this.breadcrumbsData.current = this.breadcrumbs;
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
