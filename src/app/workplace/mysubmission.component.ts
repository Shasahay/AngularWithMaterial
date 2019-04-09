import { Component, OnInit} from '@angular/core'
import { RequestStatus } from '../model/requeststatus'
import { Approvalservice } from '../service/approval.service';
import { LanguageService } from '../service/language.service';
import { User } from '../model/user';
@Component({
    selector: 'app-mysubmission',
    templateUrl: './MySubmission.Component.html',
    styleUrls: ['./MySubmission.Component.css']
})

export class MySubmissionComponent implements OnInit{
    mysub_pnl_title_label: string;
    mysub_tbl_hdr1_label : string;
    mysub_tbl_hdr2_label : string;
    mysub_tbl_hdr3_label : string;
    mysub_tbl_hdr4_label : string;
    mysub_tbl_hdr5_label: string;
    mysub_tbl_hdr6_label : string;
    allRequestStatus : RequestStatus[];
    currentUser : User;
    sourceLanguageCollection : any;
    constructor( private _approvalServ : Approvalservice, private langService : LanguageService){

    }

    mapCultureVariant(source : any): void{
        this.mysub_pnl_title_label = source.mysub_pnl_title_label;
        this.mysub_tbl_hdr1_label = source.mysub_tbl_hdr1_label;
        this.mysub_tbl_hdr2_label = source.mysub_tbl_hdr2_label;
        this.mysub_tbl_hdr3_label = source.mysub_tbl_hdr3_label;
        this.mysub_tbl_hdr4_label = source.mysub_tbl_hdr4_label;
        this.mysub_tbl_hdr5_label = source.mysub_tbl_hdr5_label;
        this.mysub_tbl_hdr6_label = source.mysub_tbl_hdr6_label;
      }

ngOnInit(){
    this._approvalServ.getRequestStatus().subscribe(data => {
        this.allRequestStatus = data;
    })
    this.langService.eventCallback$.subscribe(d => {
        this.sourceLanguageCollection = d;
        this.mapCultureVariant(this.sourceLanguageCollection);
          this.currentUser = JSON.parse(localStorage.getItem('user'));
      })
}

}
