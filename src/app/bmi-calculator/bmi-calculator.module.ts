import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiDashboardComponent } from './bmi-dashboard/bmi-dashboard.component';
import { BmiRoutingModule } from './bmi-routing.module';

@NgModule({
  declarations: [
    BmiDashboardComponent
  ],
  imports: [
    CommonModule, BmiRoutingModule
  ]
})
export class BmiCalculatorModule { }
