import { TestBed, inject } from '@angular/core/testing';

import { DomServiceService } from './dom-service.service';

describe('DomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomServiceService]
    });
  });

  it('should be created', inject([DomServiceService], (service: DomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
