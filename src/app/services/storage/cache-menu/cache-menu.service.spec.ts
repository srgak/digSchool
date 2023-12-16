import { TestBed } from '@angular/core/testing';

import { CacheMenuService } from './cache-menu.service';

describe('CacheMenuService', () => {
  let service: CacheMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
