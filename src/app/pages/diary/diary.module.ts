import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { TabsMenuModule } from 'src/app/shared/components/tabs-menu/tabs-menu.module';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';



@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    TabsMenuModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.diary)
  ]
})
export class DiaryModule { }
