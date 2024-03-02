import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary.component';
import { NgModule } from '@angular/core';
import { DiaryMarksComponent } from './diary-marks/diary-marks.component';
import { marksLessonResolver } from '../../resolvers/marks/marks-lesson';

const routes: Routes = [
  {
    path: '',
    component: DiaryComponent,
    children: [
      {
        path: ':id',
        component: DiaryMarksComponent,
        resolve: {
          marks: marksLessonResolver,
        },
        data: {
          role: 'pupil',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
