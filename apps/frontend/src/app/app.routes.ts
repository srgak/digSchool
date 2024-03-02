import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageName } from './helpers/routes';
import { canActivateAuth, canDeactivateAuth } from './guards/authorized/authorized.guard';
import { userDataResolver } from './resolvers/users/user-data';
import {
  canActivateAdmin,
  canActivatePupil,
  canActivateTeacher,
} from './guards/check-role/check-role.guard';
import { marksIdResolver } from './resolvers/marks/marks-id';
import { userPupilsResolver } from './resolvers/users/user-pupils';
import { userLessonsResolver } from './resolvers/users/user-lessons';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: pageName.Main,
  },
  {
    path: pageName.Auth,
    pathMatch: 'full',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
    title: 'Авторизация',
    canActivate: [canDeactivateAuth],
  },
  {
    path: pageName.Main,
    pathMatch: 'full',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
    title: 'Главная панель',
    canActivate: [canActivateAuth],
    resolve: [userDataResolver],
  },
  {
    path: pageName.ControlPanel,
    loadChildren: () =>
      import('./pages/control-panel/control-panel.module').then((m) => m.ControlPanelModule),
    canActivate: [canActivateAuth, canActivateAdmin],
    title: 'Панель управления',
  },
  {
    path: pageName.Diary,
    loadChildren: () => import('./pages/diary/diary.module').then((m) => m.DiaryModule),
    title: 'Дневник',
    canActivate: [canActivateAuth, canActivatePupil],
    resolve: {
      lessons: userLessonsResolver,
      marksId: marksIdResolver,
    },
  },
  {
    path: pageName.Journal,
    loadChildren: () => import('./pages/journal/journal.module').then((m) => m.JournalModule),
    title: 'Журнал',
    canActivate: [canActivateAuth, canActivateTeacher],
    resolve: {
      pupils: userPupilsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
