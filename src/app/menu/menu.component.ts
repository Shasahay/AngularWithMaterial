import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu_workspace_label : string
  language : string;
  menu_create_application_label : string;
  sourceLanguageCollection : any;
  menu_dashboard_label: string;
  menu_approve_application_label : string;
  menu_approvelist_label : string;
  menu_mysubmittion_label : string;
  menu_sharedbyme_label : string;
  menu_sharedtome_label : string;
  menu_draft_label : string;
  menu_secondmenu_label : string;
  menu_third_label : string;
  menu_fourth_label : string;
  menu_fifth_label : string;
  menu_sixth_label : string;
  menu_manage_workflow_label : string;
  menu_seventh_label : string;
  menu_manage_user_label : string;
  constructor(private langService : LanguageService) { }

  ngOnInit() {
    this.language = localStorage.getItem('language')
    this.sourceLanguageCollection = this.langService.GetLanguageCollection(this.language);
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
     
  }

mapCultureVariant(source : any): void{
  this.menu_workspace_label = source.menu_workspace_label;
  this.menu_create_application_label = source.menu_create_application_label;
  this.menu_dashboard_label = source.menu_dashboard_label;

  this.menu_approve_application_label = source.menu_approve_application_label;
  this.menu_approvelist_label = source.menu_approvelist_label;
  this.menu_mysubmittion_label = source.menu_mysubmittion_label;
  this.menu_sharedbyme_label = source.menu_sharedbyme_label;
  this.menu_sharedtome_label = source.menu_sharedtome_label;
  this.menu_draft_label = source.menu_draft_label;
  this.menu_secondmenu_label = source.menu_secondmenu_label;

  this.menu_third_label = source.menu_third_label;
  this.menu_fourth_label = source.menu_fourth_label;
  this.menu_fifth_label = source.menu_fifth_label;
  this.menu_manage_user_label = source.menu_manage_user_label;
  this.menu_seventh_label = source.menu_seventh_label;
  this.menu_sixth_label = source.menu_sixth_label;
  this.menu_manage_workflow_label = source.menu_manage_workflow_label;

}
}
