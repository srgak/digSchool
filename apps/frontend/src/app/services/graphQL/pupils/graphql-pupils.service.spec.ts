import { TestBed } from '@angular/core/testing';

import { GraphqlPupilsService } from './graphql-pupils.service';

describe('GraphqlPupilsService', () => {
  let service: GraphqlPupilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlPupilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
