import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { RoleData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { UsersService } from 'src/app/services/db/users/users.service';
import { ShowFieldModule } from 'src/app/shared/directives/show-field/show-field.module';

@Component({
  selector: 'app-control-panel-edit',
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ShowFieldModule
  ]
})
export class ControlPanelEditComponent implements OnInit, OnDestroy {
  public form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    patronymic: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    class: new FormControl(null) //todo создать отдельную форму для заполнения класса
  });
  private subs: Subscription = new Subscription();

  public roles: RoleData[] = [
    {
      name: 'Администратор',
      value: 'admin'
    },
    {
      name: 'Ученик',
      value: 'pupil'
    },
    {
      name: 'Учитель',
      value: 'teacher'
    }
  ];
  public roleNameList: string[] = ['pupil'];
  constructor(
    public activatedRoute: ActivatedRoute,
    private userData: UsersService,
    private router: Router
  ) {}

  public onSubmit(): void {
    if(this.form.valid) {
      this.userData.DB.put(this.form.value);
      this.router.navigateByUrl(pageName.ControlPanel);
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.subs.add(
      this.activatedRoute.data
        .pipe(
          map(list => list['0'])
        )
        .subscribe(user => {
          this.form.patchValue(user);
          Object.keys(this.form.controls).forEach(name => {
            if(!this.form.get(name)?.value) {
              this.form.get(name)?.disable();
            }
          });
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
