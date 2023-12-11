import { TestBed } from '@angular/core/testing';

import { CacheBreadcrumbsService } from './cache-breadcrumbs.service';

describe('CacheBreadcrumbsService', () => {
  let service: CacheBreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheBreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
