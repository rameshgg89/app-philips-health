import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyDashboardComponent } from './army-dashboard.component';

describe('ArmyDashboardComponent', () => {
  let component: ArmyDashboardComponent;
  let fixture: ComponentFixture<ArmyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmyDashboardComponent]
    });
    fixture = TestBed.createComponent(ArmyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
