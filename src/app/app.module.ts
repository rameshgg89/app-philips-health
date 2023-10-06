import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AccountsModule } from './accounts/accounts.module';
import { BodymeasurementsCalculatorModule } from './bodymeasurements-calculator/bodymeasurements-calculator.module';
import { BodymassCalcComponent } from './bmi-dashboard/bodymass-calc/bodymass-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCalculatorsDashboardComponent,
    BodymassCalcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodymeasurementsCalculatorModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
