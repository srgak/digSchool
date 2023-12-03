import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AccessTokenService } from "../services/storage/access-token/access-token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private accessToken: AccessTokenService = inject(AccessTokenService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.accessToken.prop}`)
    });

    return next.handle(request);
  }
}