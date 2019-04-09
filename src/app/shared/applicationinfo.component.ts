import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-applicationinfo',
  templateUrl: './applicationinfo.component.html',
  styleUrls: ['./applicationinfo.component.css']
})
export class ApplicationinfoComponent implements OnInit {

  applicationId : number;
  applicationName : string;
  departmentName : string;
  currentUser : User;
  sourceLanguageCollection : any;
  application_title_label : string;
  application_appid_label : string;
  application_appname_label : string;
  application_department_label : string;
  constructor(private langService : LanguageService) { }

  ngOnInit() {
    //this.language = localStorage.getItem('language')
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.applicationId = this.currentUser.Application.Id;
    this.applicationName = this.currentUser.Application.Name;
    this.departmentName = this.currentUser.Department.Name;
  }
  mapCultureVariant(source : any): void{
    this.application_appid_label = source.application_appid_label;
    this.application_title_label = source.application_title_label;
    this.application_appname_label = source.application_appname_label;
    this.application_department_label = source.application_department_label;
  }
}
