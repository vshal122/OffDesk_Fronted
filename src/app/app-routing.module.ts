import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './Components/email/email.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Service/auth.guard';
import { RegistraionComponent } from './Components/registraion/registraion.component';


const routes: Routes = [
  { path: 'SendMail', component: EmailComponent, pathMatch:"full" },
  { path: 'login', component: LoginComponent , pathMatch:"full" },
  { path: 'dashboard', component: DashboardComponent , pathMatch:"full",canActivate:[AuthGuard] },
  { path : '' ,component : HomeComponent,pathMatch:"full"},
  { path : 'registration' ,component : RegistraionComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }