import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import { AuthguardGuard } from './authguard.guard';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { ProductMangoComponent } from './product-mango/product-mango.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
{ path: "login", component: LoginComponent },
{ path: "home", component: HomepageComponent },
{ path: "registration", component: RegisterComponent },
{ path: "dashboard", component: AdmindashboardComponent,canActivate: [AuthguardGuard] },
{ path: "dashboard1", component: AdminDashboardComponent },
{ path: "mango",component:ProductMangoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
