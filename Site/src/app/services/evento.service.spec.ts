import { EventoService } from './evento.service';
import { TestBed } from '@angular/core/testing';

describe('EventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoService = TestBed.get(EventoService);
    expect(service).toBeTruthy();
  });
});
