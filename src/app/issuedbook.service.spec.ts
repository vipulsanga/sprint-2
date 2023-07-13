import { TestBed } from '@angular/core/testing';

import { IssuedbookService } from './issuedbook.service';

describe('IssuedbookService', () => {
  let service: IssuedbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuedbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
