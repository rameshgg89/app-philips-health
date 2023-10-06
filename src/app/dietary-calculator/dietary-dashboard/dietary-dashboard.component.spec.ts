import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryDashboardComponent } from './dietary-dashboard.component';

describe('DietaryDashboardComponent', () => {
  let component: DietaryDashboardComponent;
  let fixture: ComponentFixture<DietaryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietaryDashboardComponent]
    });
    fixture = TestBed.createComponent(DietaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
