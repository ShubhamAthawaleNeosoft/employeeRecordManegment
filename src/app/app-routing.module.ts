import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './MyComponents/dashboard/add-employee/add-employee.component';
import { AllEmployeeComponent } from './MyComponents/dashboard/all-employee/all-employee.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { EditEmployeeComponent } from './MyComponents/dashboard/edit-employee/edit-employee.component';
import { ProfileComponent } from './MyComponents/dashboard/profile/profile.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';

const routes: Routes = [
  {path : '',component:RegisterComponent},
  {path : 'login', component: LoginComponent},
  {path : 'dashboard',component:DashboardComponent,
    children:[
      {path : 'profile',component:ProfileComponent},
      {path : 'add_employee',component:AddEmployeeComponent},
      {path : 'all_employee',component:AllEmployeeComponent},
      {path : 'edit_employee/:id',component:EditEmployeeComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [DashboardComponent,AddEmployeeComponent,AllEmployeeComponent,ProfileComponent,RegisterComponent,LoginComponent,EditEmployeeComponent]
