import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { notEmptyList } from '../../helpers/pipes/not-empty-list';
import { routeName } from '../../helpers/routes';
import { GraphqlPupilsService } from '../../services/graphQL/pupils/graphql-pupils.service';
import { SelectDataClassesService } from '../../services/select-data/select-data-classes/select-data-classes.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';
import { PAGE_NAME } from '../../helpers/tokens/page-name.token';

@Component({
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JournalComponent {
  public pupilsList$: Observable<UserData[]> = this.activateRoute.data.pipe(
    map(({ pupils }) => pupils as UserData[]),
  );
  constructor(
    private readonly activateRoute: ActivatedRoute,
    public classData: SelectDataClassesService,
    public graphQLPupils: GraphqlPupilsService,
    private readonly router: Router,
    @Inject(PAGE_NAME) private readonly page: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        pageName: this.page,
      }),
    );
  }

  public onClassChanged(event: MatSelectChange): void {
    this.pupilsList$ = this.graphQLPupils.getPupilsByClass(event.value).pipe(notEmptyList);
  }

  public onPupilSelected(user: UserData): void {
    this.router.navigate([`${routeName.Journal}/${routeName.JournalMarks}`, user.marks?.id]);
  }
}
