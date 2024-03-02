import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export class HttpMain {
  public readonly http: HttpClient = inject(HttpClient);
}
