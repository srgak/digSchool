import { TestBed } from '@angular/core/testing';

import { AuthFlagService } from './auth-flag.service';

describe('AuthFlagService', () => {
  let service: AuthFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
