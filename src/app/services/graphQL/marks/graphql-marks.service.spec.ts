import { TestBed } from '@angular/core/testing';

import { GraphqlMarksService } from './graphql-marks.service';

describe('GraphqlMarksService', () => {
  let service: GraphqlMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
