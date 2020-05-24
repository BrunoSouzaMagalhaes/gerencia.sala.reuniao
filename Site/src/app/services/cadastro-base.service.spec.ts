import { TestBed } from '@angular/core/testing';

import { CadastroBaseService } from './cadastro-base.service';

describe('CadastroBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroBaseService = TestBed.get(CadastroBaseService);
    expect(service).toBeTruthy();
  });
});
