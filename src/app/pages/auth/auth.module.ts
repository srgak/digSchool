import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordModule } from 'src/app/shared/directives/password/password.module';
import { TransliterationModule } from 'src/app/shared/directives/transliteration/transliteration.module';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    PasswordModule,
    TransliterationModule
  ]
})
export class AuthModule { }
