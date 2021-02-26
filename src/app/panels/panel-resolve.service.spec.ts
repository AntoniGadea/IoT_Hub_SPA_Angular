import { TestBed } from '@angular/core/testing';

import { PanelResolveService } from './panel-resolve.service';

describe('PanelResolveService', () => {
  let service: PanelResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
