import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';
import { MarkValue } from 'src/app/helpers/interfaces/marks';
import { MarksDataService } from 'src/app/services/marks/marks.service';
import { TableMarksModule } from 'src/app/shared/components/tables/table-marks/table-marks.module';

@Component({
  selector: 'app-diary-marks',
  templateUrl: './diary-marks.component.html',
  styleUrls: ['./diary-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TableMarksModule
  ]
})
export class DiaryMarksComponent {
  public currentMarks!: Observable<MarkValue[] | string>;
  public columnList: string[] = [
    'date',
    'value',
    'type',
    'description'
  ];
  constructor(
    private activeRoute: ActivatedRoute,
    public marksData: MarksDataService
  ) {
    marksData.currentMarks$ = activeRoute.params
      .pipe(
        map(data => data['id']),
        switchMap(data => marksData.getCurrentMarks(data)),
        filter(list => !!list)
      )
  }
}
