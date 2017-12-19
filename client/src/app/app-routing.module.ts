import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCheckComponent } from './login-check/login-check.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginCheckComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
    { path: 'users/:id', pathMatch: 'full', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
