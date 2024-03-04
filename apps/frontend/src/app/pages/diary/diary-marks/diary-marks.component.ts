import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TableMarksModule } from '../../../shared/components/tables/table-marks/table-marks.module';
import { MarkInfo } from 'libs/api-interfaces/src';

@Component({
  templateUrl: './diary-marks.component.html',
  styleUrls: ['./diary-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TableMarksModule],
})
export class DiaryMarksComponent {
  public columnList: string[] = ['date', 'value', 'type', 'description'];
  public marks$: Observable<MarkInfo[]> = this.activeRoute.data.pipe(map((data) => data['marks']));

  constructor(private readonly activeRoute: ActivatedRoute) {}
}
