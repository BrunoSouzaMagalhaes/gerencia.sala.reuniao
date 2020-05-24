import { TestBed } from '@angular/core/testing';

import { AgGridBrasilService } from './ag-grid-brasil-service.service';

describe('AgGridBrasilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgGridBrasilService = TestBed.get(AgGridBrasilService);
    expect(service).toBeTruthy();
  });
});
