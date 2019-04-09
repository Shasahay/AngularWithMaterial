import { Component,Inject, OnInit, ViewEncapsulation } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Activity } from '../model/activity';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-searchdialog',
  templateUrl: './searchdialog.component.html',
  styleUrls: ['./searchdialog.component.css']
})
export class SearchdialogComponent implements OnInit {
  description:string;
  activity : Activity;
  activityType : string;
  actDescription : string;
  actSortDesc : string;
  actItems : number[];
  constructor(private _globalService : GlobalService, private dialogRef: MatDialogRef<SearchdialogComponent>,@Inject(MAT_DIALOG_DATA) {description,longDescription,category}:any ){
      this.description = description;
  }

  ngOnInit() {
  }
  
  ActivityTypeChangeEventHandler($event : any){
    this.activity = $event;
        this.activityType = this.activity.ActivityType;
        this.actSortDesc = this.activity.SortDescription;
        this.actDescription = this.activity.Description;
        this.actItems = this.activity.DefaultItem;
        this._globalService.setActivityType = this.activityType;
  }

  selected(event){
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    this._globalService.setActDecItem = selectedData.text;
    console.log(selectedData);
  }

}
