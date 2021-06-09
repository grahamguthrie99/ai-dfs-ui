import { TestBed } from '@angular/core/testing';

import { ScraperAPIService } from './scraper-api.service';

describe('ScraperAPIService', () => {
  let service: ScraperAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScraperAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
