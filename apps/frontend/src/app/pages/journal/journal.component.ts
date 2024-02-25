import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserData } from '../../helpers/interfaces/user';
import { notEmptyList } from '../../helpers/pipes/not-empty-list';
import { pageName } from '../../helpers/routes';
import { BREADCRUMBS_URL } from '../../helpers/tokens/breadcrumbs';
import { GraphqlPupilsService } from '../../services/graphQL/pupils/graphql-pupils.service';
import { SelectDataClassesService } from '../../services/select-data/select-data-classes/select-data-classes.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';

@Component({
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent {
  public pupilsList: Observable<UserData[]>;
  constructor(
    private activeRoute: ActivatedRoute,
    public classData: SelectDataClassesService,
    public graphQLPupils: GraphqlPupilsService,
    private router: Router,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
    this.pupilsList = this.activeRoute.data.pipe(
      map(data => data['pupils'])
    )
  }

  public onClassChanged(event: MatSelectChange): void {
    this.pupilsList = this.graphQLPupils.getPupilsByClass(event.value)
      .pipe(
        notEmptyList
      );
  }

  public onPupilSelected(user: UserData): void {
    this.router.navigate([`${pageName.Journal}/${pageName.JournalMarks}`, user.marks?.id]);
  }
}
