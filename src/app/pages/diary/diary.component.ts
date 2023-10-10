import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Mark } from 'src/app/helpers/interfaces/marks';
import { MarksDataService } from 'src/app/services/marks/marks.service';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {
  public markData$: Observable<Mark[]>;
  constructor(
    private activeRoute: ActivatedRoute,
    private marksData: MarksDataService
  ) {
    this.markData$ = activeRoute.data.pipe(
      map(data => data['0']),
      tap(data => marksData.data = data)
    )
  }
}
