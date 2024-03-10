import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { TabsMenuModule } from '../../shared/components/tabs-menu/tabs-menu.module';
import { pageName } from '../../helpers/routes';
import { pageNameProvide } from '../../helpers/providers/page-name';

@NgModule({
  declarations: [DiaryComponent],
  imports: [CommonModule, DiaryRoutingModule, TabsMenuModule],
  providers: [pageNameProvide(pageName.Diary)],
})
export class DiaryModule {}
