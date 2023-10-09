import { RouterModule, Routes } from "@angular/router";
import { DiaryComponent } from "./diary.component";
import { NgModule } from "@angular/core";
import { DiaryMarksComponent } from "./diary-marks/diary-marks.component";

const routes: Routes = [
  {
    path: '',
    component: DiaryComponent,
    children: [
      {
        path: ':id',
        component: DiaryMarksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule {}