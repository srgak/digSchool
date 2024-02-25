import { TestBed } from '@angular/core/testing';

import { GraphqlTeachersService } from './graphql-teachers.service';

describe('GraphqlTeachersService', () => {
  let service: GraphqlTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
