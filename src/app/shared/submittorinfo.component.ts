import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { User } from '../model/user';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-submittorinfo',
  templateUrl: './submittorinfo.component.html',
  styleUrls: ['./submittorinfo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubmittorinfoComponent implements OnInit {
  panelOpenState = true;
  currentUser : User;
  submittorId : number;
  SubmitterName : string;
  SubmitterDate : Date;
  sourceLanguageCollection : any;
  submittor_subid_label : string;
  submitor_subname_label : string;
  submittor_title_label : string;
  submitor_date_label : string;
  constructor(private langService : LanguageService) { }

  ngOnInit() {
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
    this.currentUser = JSON.parse(localStorage.getItem('user'));
     this.submittorId = this.currentUser.Id;
    this.SubmitterName = this.currentUser.Name
    this.SubmitterDate = new Date();
   
  }
mapCultureVariant(source : any): void{
    this.submittor_subid_label = source.submittor_subid_label;
    this.submitor_subname_label = source.submitor_subname_label;
    this.submittor_title_label = source.submittor_title_label;
    this.submitor_date_label = source.submitor_date_label;
  }
}
