import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AccessTokenService } from '../services/storage/access-token/access-token.service';
import { pageName } from '../helpers/routes';

@Injectable()
export class ErrorsHandlerInterceptor implements HttpInterceptor {
  private readonly router: Router = inject(Router);
  private readonly accessToken: AccessTokenService = inject(AccessTokenService);
  private readonly modal: ModalService = inject(ModalService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const { errors } = error.error;
        const { message } = Array.isArray(errors) ? errors[0] : error.error;

        this.handleErrorAuth(error);
        this.handleErrorIdNotFound(request);
        this.modal.openModal('error', message);

        return throwError(() => error);
      }),
    );
  }

  private handleErrorAuth(error: HttpErrorResponse): void {
    if (error.status === 401) {
      this.router.navigateByUrl(pageName.Auth);
      this.accessToken.remove();
    }
  }

  private handleErrorIdNotFound(request: HttpRequest<any>): void {
    const arr = request.url.split('/');

    if (request.method === 'GET' && !!+arr[arr.length - 1]) {
      this.router.navigate(['../']);
    }
  }
}
