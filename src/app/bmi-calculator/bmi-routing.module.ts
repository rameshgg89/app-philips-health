import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { BmiDashboardComponent } from "./bmi-dashboard/bmi-dashboard.component";
import { IndexCalcComponent } from "../bmi-dashboard/index-calc/index-calc.component";
import { KidsCalcComponent } from "../bmi-dashboard/kids-calc/kids-calc.component";
import { BodymassCalcComponent } from "../bmi-dashboard/bodymass-calc/bodymass-calc.component";

//http:localhost:4200/bmi
const bmiPaths:Routes=[
    {path:"",redirectTo:"dashboard",pathMatch:'full'},
    {path:"dashboard",component:BmiDashboardComponent,children:[
        {path:"index",component:IndexCalcComponent},
  {path:"kids",component:KidsCalcComponent},
  {path:"bodymass",component:BodymassCalcComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(bmiPaths)],
    exports:[RouterModule]
})

export class BmiRoutingModule{

}