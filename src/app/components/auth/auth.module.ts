import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LogInComponent } from "./log-in/log-in.component";

@NgModule({
    declarations: [
        AuthComponent,
        LogInComponent,

    ],
    imports: [FormsModule, ReactiveFormsModule, RouterModule, AuthRoutingModule,
        SharedModule]
})

export class AuthModule {

}