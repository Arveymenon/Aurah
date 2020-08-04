import { TestBed } from '@angular/core/testing';

import { LoadingService } from '../../src/app/loading.service';

describe('LoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });
});
