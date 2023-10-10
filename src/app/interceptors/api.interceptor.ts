import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ModalService } from "../services/modal/modal.service";
import { AccessTokenService } from "../services/storage/access-token/access-token.service";
import { Router } from "@angular/router";
import { pageName } from "../helpers/routes";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private modal: ModalService,
    private accessToken: AccessTokenService,
    private router: Router
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.accessToken.prop}`)
    });

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 401) {
            this.router.navigateByUrl(pageName.Auth);
            this.accessToken.remove();
          }
          this.modal.openModal('error', error.error);
          return throwError(() => error);
        })
      )
  }
}