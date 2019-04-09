import {Component} from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
    selector: 'app-detailexpenseinfo',
    templateUrl: './detailexpense.component.html',
    styleUrls: ['./detailexpense.component.css']
  })


  export class DetailExpenseComponent {
    
    dtl_panel_header_label : string;
    dtl_tbl_hdr1_label : string;
    dtl_tbl_hdr2_label : string;
    dtl_tbl_hdr3_label : string;
    dtl_tbl_hdr4_label : string;
    dtl_tbl_hdr5_label : string;
    dtl_tbl_hdr6_label : string;
    editField: string;
    sourceLanguageCollection : any;
    detailsExpenses: Array<any> = [
      { id: 1, name: [{ itemname : 'Decision item1'},{ itemname : 'Decision item2'},{ itemname : 'Decision item3'},{ itemname : 'Decision item4'},{ itemname : 'Decision item5'}], costcenters: [{costItemName:'Cost Center 1'},{costItemName:'Cost Center 2'},{costItemName:'Cost Center 3'},{costItemName:'Cost Center 4'}], thisfiscal: '0', nextfiscal: '0', otherfiscal: '0' }
    ];

    awaitingPersonList: Array<any> = [
        // { id: 6, name: 'Decision item3', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
        // { id: 7, name: 'Decision item4', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
        // { id: 8, name: 'Decision item5', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' }
        { id: 1, name: [{ itemname : 'Decision item1'},{ itemname : 'Decision item2'},{ itemname : 'Decision item3'},{ itemname : 'Decision item4'},{ itemname : 'Decision item5'}], costcenters: [{costItemName:'Cost Center 1'},{costItemName:'Cost Center 2'},{costItemName:'Cost Center 3'},{costItemName:'Cost Center 4'}], thisfiscal: '0', nextfiscal: '0', otherfiscal: '0' }
      ];

      constructor( private langService : LanguageService){
        
      }

      ngOnInit() {
        this.langService.eventCallback$.subscribe(d => {
          this.sourceLanguageCollection = d;
          this.mapCultureVariant(this.sourceLanguageCollection);
        })
      }

      updateList(id: number, property: string, event: any) {
        const editField = event.target.textContent;
        this.detailsExpenses[id][property] = editField;
      }
  
      remove(id: any) {
        this.awaitingPersonList.push(this.detailsExpenses[id]);
        this.detailsExpenses.splice(id, 1);
      }
  
      add() {
        if (this.awaitingPersonList.length > 0) {
          const expense = this.awaitingPersonList[0];
          this.detailsExpenses.push(expense);
          //this.awaitingPersonList.splice(0, 1);
        }
      }
  
      changeValue(id: number, property: string, event: any) {
        this.editField = event.target.textContent;
      }

      mapCultureVariant(source : any): void{
        this.dtl_panel_header_label = source.dtl_panel_header_label;
        this.dtl_tbl_hdr1_label = source.dtl_tbl_hdr1_label;
        this.dtl_tbl_hdr2_label = source.dtl_tbl_hdr2_label;
        this.dtl_tbl_hdr3_label = source.dtl_tbl_hdr3_label;
        this.dtl_tbl_hdr4_label = source.dtl_tbl_hdr4_label;
        this.dtl_tbl_hdr5_label = source.dtl_tbl_hdr5_label;
        this.dtl_tbl_hdr6_label = source.dtl_tbl_hdr6_label;
      }
  }