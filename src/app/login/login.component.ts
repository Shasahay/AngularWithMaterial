import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { UserService } from '../service/user.service';
import { GlobalService } from '../service/global.service';
import { User } from '../model/user';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private langService : LanguageService, private router : Router, private _userService : UserService,private _globalService: GlobalService) { }
  language : string;
  login_title : string;
  sourceLanguageCollection : any;
  userName : string;
  password : string
  users : User[];
  placeholder_login_userName : string;
  currentUser : User;
  placeholder_login_password: string;
  ngOnInit() {
    this.language = localStorage.getItem('language')
    this.sourceLanguageCollection = this.langService.GetLanguageCollection(this.language);
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
     
    this.users = this._userService.getUsers();
  }

  mapCultureVariant(source : any): void{
      this.placeholder_login_userName = source.placeholder_login_userName;
      this.placeholder_login_password = source.placeholder_login_password;
      this.login_title = source.login_title;
  }
  login() : void {
    this.currentUser = this.users.find(x=> (x.UserName == this.userName && x.Password == this.password)); 
    if(this.currentUser != null || this.currentUser != undefined){
      this._globalService.theUser = JSON.stringify(this.currentUser);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      this.router.navigate(["dashboard"]);
    }else{
      alert("Invalid credentials");
    }
  }
  
  }



