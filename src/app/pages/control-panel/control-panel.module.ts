import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ControlPanelRoutingModule } from './control-panel-routing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ControlPanelEditComponent } from './control-panel-edit/control-panel-edit.component';



@NgModule({
  declarations: [ControlPanelComponent, ControlPanelEditComponent],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class ControlPanelModule { }
