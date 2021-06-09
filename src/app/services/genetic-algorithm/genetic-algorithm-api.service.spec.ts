import { TestBed } from '@angular/core/testing';

import { GeneticAlgorithmAPIService } from './genetic-algorithm-api.service';

describe('GeneticAlgorithmAPIService', () => {
  let service: GeneticAlgorithmAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneticAlgorithmAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
