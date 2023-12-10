import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { MarksDataService } from 'src/app/services/marks/marks.service';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    public marksData: MarksDataService,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
    marksData.data$ = activeRoute.data.pipe(
      map(data => data['0'])
    )
  }
}
