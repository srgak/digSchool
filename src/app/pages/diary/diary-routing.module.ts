import { RouterModule, Routes } from "@angular/router";
import { DiaryComponent } from "./diary.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: DiaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule {}