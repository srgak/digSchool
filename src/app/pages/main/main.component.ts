import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  public userData: Observable<UserData> = this.activateRoute.data
    .pipe(
      map(data => data['0'])
    );
  constructor(
    public activateRoute: ActivatedRoute,
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    this.breadcrumbsData.current = this.breadcrumbs;
  }
}
