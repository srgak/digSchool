import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { MatTableModule } from '@angular/material/table';
import { TableUsersModule } from 'src/app/shared/components/table-users/table-users.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    MatTableModule,
    TableUsersModule,
    MatButtonModule
  ]
})
export class ControlPanelModule { }
