import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricDashboardComponent } from './pediatric-dashboard.component';

describe('PediatricDashboardComponent', () => {
  let component: PediatricDashboardComponent;
  let fixture: ComponentFixture<PediatricDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PediatricDashboardComponent]
    });
    fixture = TestBed.createComponent(PediatricDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
