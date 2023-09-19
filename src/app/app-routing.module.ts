import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageName } from './helpers/routes';
import { canActivateAuth, canDeactivateAuth } from './guards/authorized/authorized.guard';
import { userDataResolver } from './resolvers/user-data';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: pageName.Main
  },
  {
    path: pageName.Auth,
    pathMatch: 'full',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    title: 'Авторизация',
    canActivate: [canDeactivateAuth]
  },
  {
    path: pageName.Main,
    pathMatch: 'full',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    title: 'Главная панель',
    canActivate: [canActivateAuth],
    resolve: [
      userDataResolver
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
