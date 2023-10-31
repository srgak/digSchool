import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable, filter } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
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
    public httpPupils: HttpPupilsService
  ) {
    this.pupilsList = httpPupils.getPupils()
      .pipe(
        filter(list => !!list.length)
      );
  }

  public onClassChanged(event: MatSelectChange): void {
    this.pupilsList = this.httpPupils.getPupilsByClass(event.value)
      .pipe(
        filter(list => !!list.length)
      );
  }
}
