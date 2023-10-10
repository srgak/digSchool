import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { TabsMenuModule } from 'src/app/shared/components/tabs-menu/tabs-menu.module';



@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    TabsMenuModule
  ]
})
export class DiaryModule { }
