import { TestBed } from '@angular/core/testing';

import { BooksdaoService } from './booksdao.service';

describe('BooksdaoService', () => {
  let service: BooksdaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksdaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
