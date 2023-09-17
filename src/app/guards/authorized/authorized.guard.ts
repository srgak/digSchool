import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { pageName } from 'src/app/helpers/routes';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';

@Injectable({
  providedIn: 'root'
})
class AuthorizedGuard {
  constructor(
    private authFlag: AuthFlagService
  ) {}
  canActivate(): boolean {
    return this.authFlag.prop;
  }
}

export const canActivateAuth: CanActivateFn = (): boolean => {
  if(!inject(AuthorizedGuard).canActivate()) {
    inject(Router).navigateByUrl(pageName.auth);
  }
  return true;
}
export const canDeactivateAuth: CanActivateFn = (): boolean => {
  if(inject(AuthorizedGuard).canActivate()) {
    inject(Router).navigateByUrl(pageName.main);
  }
  return true;
}