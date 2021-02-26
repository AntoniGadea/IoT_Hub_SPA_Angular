import { TestBed } from '@angular/core/testing';

import { SpeackerService } from './speacker.service';

describe('SpeackerService', () => {
  let service: SpeackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
