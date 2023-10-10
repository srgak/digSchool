import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { pageName } from 'src/app/helpers/routes';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard {
  constructor(
    private accessToken: AccessTokenService
  ) {}
  canActivate(): boolean {
    return !!this.accessToken.prop;
  }
}

export const canActivateAuth: CanActivateFn = (): boolean => {
  if(!inject(AuthorizedGuard).canActivate()) {
    inject(Router).navigateByUrl(pageName.Auth);
  }
  return true;
}
export const canDeactivateAuth: CanActivateFn = (): boolean => {
  if(!!inject(AccessTokenService).prop) {
    inject(Router).navigateByUrl(pageName.Main);
  }
  return true;
}