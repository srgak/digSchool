import { TestBed } from '@angular/core/testing';

import { HttpBreadcrumbsService } from './http-breadcrumbs.service';

describe('HttpBreadcrumbsService', () => {
  let service: HttpBreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
