import { RouterModule, Routes } from "@angular/router";
import { ControlPanelComponent } from "./control-panel.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ControlPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule {}