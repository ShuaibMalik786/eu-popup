import { TestBed } from '@angular/core/testing';

import { EuPopupService } from './eu-popup.service';

describe('EuPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuPopupService = TestBed.get(EuPopupService);
    expect(service).toBeTruthy();
  });
});
