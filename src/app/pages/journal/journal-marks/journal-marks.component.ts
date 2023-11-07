import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { notEmptyList } from 'src/app/helpers/pipes/not-empty-list';
import { MarksDataService } from 'src/app/services/marks/marks.service';
import { TableMarksModule } from 'src/app/shared/components/tables/table-marks/table-marks.module';

@Component({
  templateUrl: './journal-marks.component.html',
  styleUrls: ['./journal-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TableMarksModule
  ]
})
export class JournalMarksComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    public marksData: MarksDataService
  ) {
    marksData.data$ = activateRoute.data.pipe(
      map(data => data['0'])
    )
    marksData.currentMarks$ = marksData.data$
      .pipe(
        switchMap(() => marksData.getCurrentMarks('Математика')),
        notEmptyList
      )
  }
}
