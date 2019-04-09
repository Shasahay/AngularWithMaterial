import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { SearchdialogComponent } from '../searchdialog/searchdialog.component'
import { GlobalService } from '../service/global.service';
import { LanguageService } from '../service/language.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-createapplication',
  templateUrl: './createapplication.component.html',
  styleUrls: ['./createapplication.component.css']
})
export class CreateapplicationComponent implements OnInit {
// sample to send data to dialog box
  animal: string;
  name: string;
  //
activityType : string;
actDecItem : string;
dm_title_label: string;
dm_activitytype_label: string;
dm_decisionitem_label: string;
dm_subitem_label: string;
dm_group_label: string;
dm_gift_label: string;
dm_yes_label: string;
dm_no_label: string;
dm_search_label : string;
crapp_btnsave_label : string;
crapp_btnnext_label : string;
sourceLanguageCollection : any;
  constructor( public dialog : MatDialog, private _globalService : GlobalService, private langService : LanguageService) {
      _globalService.activityType.subscribe((nextValue) => {
        this.activityType = nextValue as string;
      })

      _globalService.actDecItem.subscribe((nextValue) => {
        if(nextValue != null){
          this.actDecItem = nextValue as string;
        }
        
    })
   }

  ngOnInit() {
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
  }
  mapCultureVariant(source : any): void{
    this.dm_title_label = source.dm_title_label;
    this.dm_activitytype_label = source.dm_activitytype_label;
    this.dm_decisionitem_label = source.dm_decisionitem_label;
    this.dm_subitem_label = source.dm_subitem_label;
    this.dm_group_label = source.dm_group_label;
    this.dm_gift_label = source.dm_gift_label;
    this.dm_yes_label = source.dm_yes_label;
    this.dm_no_label = source.dm_no_label;
    this.dm_search_label = source.dm_search_label;
    this.crapp_btnsave_label = source.crapp_btnsave_label;
    this.crapp_btnnext_label = source.crapp_btnnext_label;
  }
  openDialog(){

    //const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    //this.dialog.open(SearchdialogComponent, dialogConfig);

  //   dialogConfig.position = {
  //     top: '100px',
  //     left: '100px'
  // };
  
    const dialogRef = this.dialog.open(SearchdialogComponent, {
      height: '400px',
      width: '600px',
      data: {name: this.name, animal: this.animal}
    });

    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}

