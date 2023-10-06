import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymeasurementsDashboardComponent } from './bodymeasurements-dashboard.component';

describe('BodymeasurementsDashboardComponent', () => {
  let component: BodymeasurementsDashboardComponent;
  let fixture: ComponentFixture<BodymeasurementsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodymeasurementsDashboardComponent]
    });
    fixture = TestBed.createComponent(BodymeasurementsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
