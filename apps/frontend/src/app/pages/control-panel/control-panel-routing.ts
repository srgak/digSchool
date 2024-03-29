import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';
import { NgModule } from '@angular/core';
import { ControlPanelEditComponent } from './control-panel-edit/control-panel-edit.component';
import { routeName } from '../../helpers/routes';
import { userEditResolver } from '../../resolvers/users/user-edit';
import { ControlPanelCreateComponent } from './control-panel-create/control-panel-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ControlPanelComponent,
  },
  {
    path: `${routeName.ControlPanelEdit}/:id`,
    pathMatch: 'full',
    component: ControlPanelEditComponent,
    resolve: [userEditResolver],
  },
  {
    path: `${routeName.ControlPanelCreate}`,
    pathMatch: 'full',
    component: ControlPanelCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlPanelRoutingModule {}
