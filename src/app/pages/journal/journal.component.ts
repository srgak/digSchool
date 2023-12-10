import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { notEmptyList } from 'src/app/helpers/pipes/not-empty-list';
import { pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { HttpPupilsService } from 'src/app/services/http/pupils/http-pupils.service';
import { SelectDataClassesService } from 'src/app/services/select-data/select-data-classes/select-data-classes.service';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent {
  public pupilsList: Observable<UserData[]>;
  constructor(
    public classData: SelectDataClassesService,
    public httpPupils: HttpPupilsService,
    private router: Router,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
    this.pupilsList = httpPupils.getPupils()
      .pipe(
        notEmptyList
      );
  }

  public onClassChanged(event: MatSelectChange): void {
    this.pupilsList = this.httpPupils.getPupilsByClass(event.value)
      .pipe(
        notEmptyList
      );
  }

  public onPupilSelected(user: UserData): void {
    this.router.navigate([`${pageName.Journal}/${pageName.JournalMarks}`, user.id]);
  }
}
