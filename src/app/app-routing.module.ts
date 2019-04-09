import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateapplicationComponent } from './workplace/createapplication.component' 
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecisionMakingProcessComponent } from './workplace/decisionmakingprocess.component'
import { MySubmissionComponent } from './workplace/mysubmission.component';
import { ManageWorkflowComponent } from './workflowmanagement/manageworkflow.component';
import { ManageApprovalComponent } from './UserManagement/manageapprovers.component';
const routes: Routes = [
  // {path :'home', component:AppComponent},
  {path :'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboard/createapplication', component:CreateapplicationComponent},
  {path:'dashboard/createapplication/decisionmakingprocess', component:DecisionMakingProcessComponent},
  {path:'dashboard/mysubmission', component:MySubmissionComponent},
  {path:'workflow/manageworkflow', component:ManageWorkflowComponent},
  {path:'user/manageapprover', component:ManageApprovalComponent},
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
