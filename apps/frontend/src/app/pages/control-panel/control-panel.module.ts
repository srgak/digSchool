import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { MatTableModule } from '@angular/material/table';
import { TableUsersModule } from '../../shared/components/tables/table-users/table-users.module';
import { MatButtonModule } from '@angular/material/button';
import { pageName } from '../../helpers/routes';
import { pageNameProvide } from '../../helpers/providers/page-name';

@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    MatButtonModule,
    MatTableModule,
    TableUsersModule,
  ],
  providers: [pageNameProvide(pageName.ControlPanel)],
})
export class ControlPanelModule {}
