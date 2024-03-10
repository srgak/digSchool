import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { routeName } from '../../helpers/routes';
import { AccessTokenService } from '../../services/storage/access-token/access-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard {
  constructor(private readonly accessToken: AccessTokenService) {}
  canActivate(): boolean {
    return !!this.accessToken.prop;
  }
}

export const canActivateAuth: CanActivateFn = (): boolean => {
  if (!inject(AuthorizedGuard).canActivate()) {
    inject(Router).navigateByUrl(routeName.Auth);
  }

  return true;
};
export const canDeactivateAuth: CanActivateFn = (): boolean => {
  if (inject(AccessTokenService).prop) {
    inject(Router).navigateByUrl(routeName.Main);
  }

  return true;
};
