import { Role } from './role';
import { Application } from './application';
import { Department } from './department';

export interface User{
    Id : number,
    Name : string,
    UserName : string,
    Password: string,
    Roles : Role[],
    Application : Application,
    Department : Department
}