import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { notEmptyList } from 'src/app/helpers/pipes/not-empty-list';
import { pageName } from 'src/app/helpers/routes';
import { HttpPupilsService } from 'src/app/services/http/pupils/http-pupils.service';
import { SelectDataClassesService } from 'src/app/services/select-data/select-data-classes/select-data-classes.service';

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
    private router: Router
  ) {
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
