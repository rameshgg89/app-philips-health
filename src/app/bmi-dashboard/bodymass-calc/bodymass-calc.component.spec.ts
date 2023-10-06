import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymassCalcComponent } from './bodymass-calc.component';

describe('BodymassCalcComponent', () => {
  let component: BodymassCalcComponent;
  let fixture: ComponentFixture<BodymassCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodymassCalcComponent]
    });
    fixture = TestBed.createComponent(BodymassCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
