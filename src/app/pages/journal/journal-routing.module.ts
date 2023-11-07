import { RouterModule, Routes } from "@angular/router";
import { JournalComponent } from "./journal.component";
import { NgModule } from "@angular/core";
import { pageName } from "src/app/helpers/routes";
import { JournalMarksComponent } from "./journal-marks/journal-marks.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JournalComponent
  },
  {
    path: `${pageName.JournalMarks}/:id`,
    pathMatch: 'full',
    component: JournalMarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {}