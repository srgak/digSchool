import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordModule } from '../../shared/directives/password/password.module';
import { TransliterationModule } from '../../shared/directives/transliteration/transliteration.module';
import { breadcrumbsProvide } from '../../helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from '../../helpers/routes';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    PasswordModule,
    TransliterationModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.auth)
  ]
})
export class AuthModule { }
