import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Role } from '../model/role';
import { Department } from '../model/department';
import { Application } from '../model/application';
import { WiseModule } from '../wise/wise.module';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

AdminRole : Role = {Name : 'Admin', Description:'all access'};
ReporterRole : Role = {Name : 'Report', Description:'Report access'};
NormalRole : Role = {Name : 'normal', Description:'Normal access'};

AdminDepartment : Department = { Id : 101, Name:'Admin', Description:'This is Admin dapartment'};
HRDepartment : Department = { Id : 102, Name:'HR', Description:'This is HR dapartment'};
ITDepartment : Department = { Id : 103, Name:'IT', Description:'This is IT dapartment'};

WiseApplication : Application = { Id : 5001, Name:'New Workflow System', Description:'This is New Workflow System'};
DMSApplication : Application = { Id : 5002, Name:'DMS', Description:'This is DMS Application'};
ChopeApplication : Application = { Id : 5003, Name:'CHOPE', Description:'This is CHOPE Application'};
BizApplication : Application = { Id : 5004, Name:'BIZ', Description:'This is BIZ Application'};


users : User[] = [
  {Id:10001, Name:'Admin User', UserName:'Admin', Password:'admin', Roles:[this.AdminRole, this.NormalRole, this.ReporterRole], Application:this.WiseApplication, Department:this.AdminDepartment},
  {Id:10021, Name:'Test Name 1', UserName:'test1@testing.com', Password:'Test1', Roles:[this.AdminRole], Application:this.BizApplication, Department:this.HRDepartment},
  {Id:202, Name:'Test Name 2', UserName:'test2@testing.com', Password:'Test2', Roles:[this.ReporterRole], Application:this.ChopeApplication, Department:this.HRDepartment},
  {Id:30001, Name:'Test Name 3', UserName:'test3@testing.com', Password:'Test3', Roles:[this.ReporterRole, this.NormalRole], Application:this.DMSApplication, Department:this.AdminDepartment},
  {Id:10004, Name:'Test Name 4', UserName:'test4@testing.com', Password:'Test4', Roles:[this.NormalRole], Application:this.WiseApplication, Department:this.HRDepartment},
  {Id:5001, Name:'Test Name 5', UserName:'test5@testing.com', Password:'Test5', Roles:[this.NormalRole], Application:this.BizApplication, Department:this.ITDepartment}
];

getUsers(): User[]{
  return this.users;
}

}
