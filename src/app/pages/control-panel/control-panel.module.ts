import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { MatTableModule } from '@angular/material/table';
import { TableUsersModule } from 'src/app/shared/components/tables/table-users/table-users.module';
import { MatButtonModule } from '@angular/material/button';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs } from 'src/app/helpers/routes';



@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    MatTableModule,
    TableUsersModule,
    MatButtonModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.controlPanel)
  ]
})
export class ControlPanelModule { }
