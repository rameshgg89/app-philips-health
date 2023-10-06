import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosageDashboardComponent } from './dosage-dashboard.component';

describe('DosageDashboardComponent', () => {
  let component: DosageDashboardComponent;
  let fixture: ComponentFixture<DosageDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosageDashboardComponent]
    });
    fixture = TestBed.createComponent(DosageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
