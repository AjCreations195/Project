import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeGuard } from "src/app/home.guard";
import { AuthComponent } from "./auth.component";
import { LogInComponent } from "./log-in/log-in.component";

const routes:Routes = [
    {path:'',component:AuthComponent,canActivate:[HomeGuard], children:[
        {path:'',component:LogInComponent},
        
      ]}
];

@NgModule({
        imports:[RouterModule.forChild(routes)],
        exports: [ RouterModule]
})
export class AuthRoutingModule{

}