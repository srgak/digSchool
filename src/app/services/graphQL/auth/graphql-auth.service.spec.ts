import { TestBed } from '@angular/core/testing';

import { GraphqlAuthService } from './graphql-auth.service';

describe('GraphqlAuthService', () => {
  let service: GraphqlAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
