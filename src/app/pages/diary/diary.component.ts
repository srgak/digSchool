import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MarksDataService } from 'src/app/services/marks/marks.service';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    public marksData: MarksDataService
  ) {
    marksData.data$ = activeRoute.data.pipe(
      map(data => data['0'])
    )
  }
}
