import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class HttpMain {
  protected readonly http: HttpClient = inject(HttpClient);
}
