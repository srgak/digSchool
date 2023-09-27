import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ModalService } from "../services/modal/modal.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private modal: ModalService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.modal.openModal('error', error.error);
          return throwError(() => error);
        })
      )
  }
}