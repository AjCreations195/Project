import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},  
  {path:'auth',loadChildren:()=> import('./components/auth/auth.module').then(m => m.AuthModule)},
  {path:'',canActivate: [AuthGuard], component:HomeComponent,
  children: [
    { path: 'home', component: ListComponent},
    { path: 'notification', component: NotificationsComponent },
   
]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
