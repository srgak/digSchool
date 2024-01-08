import { TestBed } from '@angular/core/testing';

import { GraphqlUsersService } from './graphql-users.service';

describe('GraphqlUsersService', () => {
  let service: GraphqlUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
