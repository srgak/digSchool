import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserInfoModule } from 'src/app/shared/components/user-info/user-info.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    UserInfoModule
  ]
})
export class MainModule { }
