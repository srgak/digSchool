import { RouterModule, Routes } from "@angular/router";
import { JournalComponent } from "./journal.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: JournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {}