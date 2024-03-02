import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider, Type } from '@angular/core';

export const interceptorProvide = (someClass: Type<any>): Provider => ({
  provide: HTTP_INTERCEPTORS,
  useClass: someClass,
  multi: true,
});
