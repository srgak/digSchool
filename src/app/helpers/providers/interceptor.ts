import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { ApiInterceptor } from "src/app/interceptors/api.interceptor";

export const interceptorProvide: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true
}