import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaCardComponent } from './vacuna-card.component';

describe('VacunaCardComponent', () => {
  let component: VacunaCardComponent;
  let fixture: ComponentFixture<VacunaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
