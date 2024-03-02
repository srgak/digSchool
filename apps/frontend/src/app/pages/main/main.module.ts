import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UserInfoModule } from '../../shared/components/user-info/user-info.module';
import { breadcrumbsProvide } from '../../helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from '../../helpers/routes';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, UserInfoModule],
  providers: [breadcrumbsProvide(pageBreadcrumbs.main)],
})
export class MainModule {}
