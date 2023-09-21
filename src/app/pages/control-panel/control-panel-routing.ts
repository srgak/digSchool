import { RouterModule, Routes } from "@angular/router";
import { ControlPanelComponent } from "./control-panel.component";
import { NgModule } from "@angular/core";
import { ControlPanelEditComponent } from "./control-panel-edit/control-panel-edit.component";
import { pageName } from "src/app/helpers/routes";
import { userEditResolver } from "src/app/resolvers/user-edit";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ControlPanelComponent
  },
  {
    path: `${pageName.ControlPanelEdit}/:id`,
    pathMatch: 'full',
    component: ControlPanelEditComponent,
    resolve: [
      userEditResolver
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule {}