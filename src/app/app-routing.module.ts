import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { ArmyDashboardComponent } from './army-calculator/army-dashboard/army-dashboard.component';
import { BodymeasurementsDashboardComponent } from './bodymeasurements-calculator/bodymeasurements-dashboard/bodymeasurements-dashboard.component';
import { DietaryDashboardComponent } from './dietary-calculator/dietary-dashboard/dietary-dashboard.component';
import { DosageDashboardComponent } from './dosage-calculator/dosage-dashboard/dosage-dashboard.component';
import { PediatricDashboardComponent } from './pediatric-calculator/pediatric-dashboard/pediatric-dashboard.component';
import { SleepDashboardComponent } from './sleep-calculator/sleep-dashboard/sleep-dashboard.component';
import { HomeComponent } from './home/home.component';
import { activateIfUserAuthenticate } from './root-guards/authenticateGuard';

const routes: Routes = [
{path:"", redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"health", component:MainCalculatorsDashboardComponent, canActivate:[activateIfUserAuthenticate]},
{path:"army", component:ArmyDashboardComponent},
{path:"body",component:BodymeasurementsDashboardComponent},
{path:"dietary", component:DietaryDashboardComponent},
{path:"dosage", component:DosageDashboardComponent},
{path:"pediatric",component:PediatricDashboardComponent},
{path:"sleep", component:SleepDashboardComponent},
{path:"bmi",loadChildren:()=>import("./bmi-calculator/bmi-calculator.module").then(m=>m.BmiCalculatorModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
