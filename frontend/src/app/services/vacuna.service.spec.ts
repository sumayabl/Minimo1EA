import { TestBed } from '@angular/core/testing';

import { VacunaService } from './vacuna.service';

describe('VacunaServiceService', () => {
  let service: VacunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
