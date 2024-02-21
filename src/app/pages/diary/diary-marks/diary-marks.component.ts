import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkInfo } from 'backend/src/interfaces/marks';
import { Observable, map } from 'rxjs';
import { TableMarksModule } from 'src/app/shared/components/tables/table-marks/table-marks.module';

@Component({
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
  public columnList: string[] = [
    'date',
    'value',
    'type',
    'description'
  ];
  public marks$: Observable<MarkInfo[]> = this.activeRoute.data
    .pipe(
      map(data => data['marks'])
    );

  constructor(
    private activeRoute: ActivatedRoute
  ) {}
}
