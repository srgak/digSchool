import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal.component';
import { NgModule } from '@angular/core';
import { routeName } from '../../helpers/routes';
import { JournalMarksComponent } from './journal-marks/journal-marks.component';
import { marksLessonResolver } from '../../resolvers/marks/marks-lesson';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JournalComponent,
  },
  {
    path: `${routeName.JournalMarks}/:id`,
    pathMatch: 'full',
    component: JournalMarksComponent,
    resolve: {
      marks: marksLessonResolver,
    },
    data: {
      role: 'teacher',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalRoutingModule {}
