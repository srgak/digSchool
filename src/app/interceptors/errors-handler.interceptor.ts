import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ModalService } from "../services/modal/modal.service";
import { Observable, catchError, throwError } from "rxjs";
import { Router } from "@angular/router";
import { AccessTokenService } from "../services/storage/access-token/access-token.service";
import { pageName } from "../helpers/routes";

@Injectable()
export class ErrorsHandlerInterceptor implements HttpInterceptor {
  private router: Router = inject(Router);
  private accessToken: AccessTokenService = inject(AccessTokenService);
  private modal: ModalService = inject(ModalService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const message = req.headers.get('type-request') === 'graphql' 
            ? error.error.errors[0].message : error.message;

          this.handleErrorAuth(error);
          this.handleErrorIdNotFound(request);
          this.modal.openModal('error', message);
          return throwError(() => error);
        })
      )
  }

  private handleErrorAuth(error: HttpErrorResponse): void {
    if(error.status === 401) {
      this.router.navigateByUrl(pageName.Auth);
      this.accessToken.remove();
    }
  }

  private handleErrorIdNotFound(request: HttpRequest<any>): void {
    const arr = request.url.split('/');

    if(request.method === 'GET' && !!+arr[arr.length - 1]) {
      this.router.navigate(['../']);
    }
  }
}