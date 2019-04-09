import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {POCMaterialModule} from './material.module';
import { MenuComponent } from './menu/menu.component';
import { CreateapplicationComponent } from './workplace/createapplication.component';
import { SearchdialogComponent } from './searchdialog/searchdialog.component'; 
import { ActivityTypeComponent} from './searchdialog/activitytype.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { WiseModule } from './wise/wise.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SubmittorinfoComponent } from './shared/submittorinfo.component';
import { ApplicationinfoComponent } from './shared/applicationinfo.component';
import { DecisionComponent} from './shared/decision.component';
import { DropdownTreeviewSelectModule } from './searchdialog/dropdown-treeview-select.module';
import { LanguageService } from './service/language.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailExpenseComponent } from './shared/detailexpense.component';
import { DecisionMakingProcessComponent } from './workplace/decisionmakingprocess.component';
import { FooterComponent } from './footer/footer.component'
import { MySubmissionComponent } from './workplace/mysubmission.component'
import { ManageWorkflowComponent } from './workflowmanagement/manageworkflow.component'
import { ManageApprovalComponent } from './UserManagement/manageapprovers.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateapplicationComponent,
    SearchdialogComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SubmittorinfoComponent,
    ApplicationinfoComponent,
    DecisionComponent,
    DetailExpenseComponent,
    DecisionMakingProcessComponent,
    FooterComponent,
    MySubmissionComponent,
    ManageWorkflowComponent,
    ManageApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    POCMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownTreeviewSelectModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent],
  entryComponents: [SearchdialogComponent]
})
export class AppModule { }
