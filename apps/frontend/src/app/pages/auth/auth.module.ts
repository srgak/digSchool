import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordModule } from '../../shared/directives/password/password.module';
import { TransliterationModule } from '../../shared/directives/transliteration/transliteration.module';
import { pageNameProvide } from '../../helpers/providers/page-name';
import { pageName } from '../../helpers/routes';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    MatInputModule,
    PasswordModule,
    ReactiveFormsModule,
    TransliterationModule,
  ],
  providers: [pageNameProvide(pageName.Auth)],
})
export class AuthModule {}
