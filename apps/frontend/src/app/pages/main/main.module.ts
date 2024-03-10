import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserInfoModule } from '../../shared/components/user-info/user-info.module';
import { pageName } from '../../helpers/routes';
import { pageNameProvide } from '../../helpers/providers/page-name';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, UserInfoModule],
  providers: [pageNameProvide(pageName.Main)],
})
export class MainModule {}
