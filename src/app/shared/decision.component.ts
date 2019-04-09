import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})

export class DecisionComponent implements OnInit{
     title : string;
     content : string;
     reason : string;
     startDate : string;
     endDate : string;
     decision_title_label : string;
     dec_ph_title : string;
     dec_content_label: string;
     dec_reason_label: string;
     dec_sdt_label:string;
     dec_edt_label: string;
     sourceLanguageCollection : any;
    constructor(private langService : LanguageService){

    }

    ngOnInit() {
      this.langService.eventCallback$.subscribe(d => {
        this.sourceLanguageCollection = d;
        this.mapCultureVariant(this.sourceLanguageCollection);
      })
}
mapCultureVariant(source : any): void{
  this.decision_title_label = source.decision_title_label;
  this.dec_ph_title = source.dec_ph_title;
  this.dec_content_label = source.dec_content_label;
  this.dec_reason_label = source.dec_reason_label;
  this.dec_sdt_label = source.dec_sdt_label;
  this.dec_edt_label = source.dec_edt_label;
}

}