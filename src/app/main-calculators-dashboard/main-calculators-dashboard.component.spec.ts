import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard.component';

describe('MainCalculatorsDashboardComponent', () => {
  let component: MainCalculatorsDashboardComponent;
  let fixture: ComponentFixture<MainCalculatorsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCalculatorsDashboardComponent]
    });
    fixture = TestBed.createComponent(MainCalculatorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
