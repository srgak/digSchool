import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';

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
    public activateRoute: ActivatedRoute
  ) { }
}
