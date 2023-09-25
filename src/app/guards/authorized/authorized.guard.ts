import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { pageName } from 'src/app/helpers/routes';
import { HttpService } from 'src/app/services/http/http.service';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';

@Injectable({
  providedIn: 'root'
})
class AuthorizedGuard {
  constructor(
    private accessToken: AccessTokenService,
    private http: HttpService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.http.checkAuth(this.accessToken.prop)
      .pipe(
        catchError(error => {
          this.accessToken.remove();
          this.router.navigateByUrl(pageName.Auth);
          return throwError(() => error);
        }),
        map(data => !!data)
      )
  }
}

export const canActivateAuth: CanActivateFn = (): Observable<boolean> => {
  return inject(AuthorizedGuard).canActivate();
}
export const canDeactivateAuth: CanActivateFn = (): boolean => {
  if(!!inject(AccessTokenService).prop) {
    inject(Router).navigateByUrl(pageName.Main);
  }
  return true;
}