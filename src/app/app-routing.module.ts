import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageName } from './helpers/routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: pageName.main
  },
  {
    path: pageName.auth,
    pathMatch: 'full',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    title: 'Авторизация'
  },
  {
    path: pageName.main,
    pathMatch: 'full',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    title: 'Главная панель',
    //todo реализовать guard на проверку авторизации
    // canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
