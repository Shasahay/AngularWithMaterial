import { Component} from '@angular/core'
import { LanguageService } from '../service/language.service';
import { DecisionLevel } from '../model/decisionlevel';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Approvalservice } from '../service/approval.service'
import { SubmittorRequest } from '../model/submittorRequest';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-decisionmaking',
    templateUrl: './decisionmakingprocess.component.html',
    styleUrls: ['./decisionmakingprocess.component.css']
  })

export class  DecisionMakingProcessComponent {
  decmk_pnl_title_label : string;
  sourceLanguageCollection : any;
  decmk_pnl_makerlist_label : string;
  decmk_pc_dmcontroller_label : string;
  decmk_pc_managmentdiv_label : string;
  decmk_approver_label : string;
  decmk_allapprover_label : string;
  decmk_yourapprover_label : string
  decmk_pc_hddevision_label : string;
  decmk_pc_govcomitte_label : string;
  decmk_submit_label : string;
  dmController : string;
  maDivision : string;
  allApprovers : string[];
  approvers : string[];
  interests:any;
  selected: any;
  appApproverFormGroup : FormGroup;
  headDivision : string;
  decisionLevel : string;
  currentUser : User;
  decisionLevelCollection : DecisionLevel[] = [{Id : 1, Value : "Government Committee"},
  {Id : 2, Value : "Board Member in Charge"},
  {Id : 3, Value : "China Representative"},
  {Id : 3, Value : "Head of BUC"},
  ]

  todo = [
    'CFO - Plannimg',
    'CFO - Management',
    'CSMC - Sales Planning',
    'EAG - External Affairs',
    'CFO - China'
  ];

  done = [
    'VP OP Of Company',
    'CFO - Chief Technical Officer'
  ];


  constructor(private langService : LanguageService, private formBuilder: FormBuilder, private approvalService : Approvalservice, public router: Router ){

  }
  ngOnInit() {
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);

      this.currentUser = JSON.parse(localStorage.getItem('user'));
    })

    this.dmController = "Development Controller";
    this.maDivision = "Development Division";
    this.allApprovers  = ['CFO-Control Group', 'CFO-Corporate Planning', 'CPCG-Management', 'CPCG-Planning','CFO-Corporate Design', 'Corporate Manager', 'Manager', 'CTO-Head-China'];
    this.headDivision = "Devision Head";
    this.decisionLevel = "Devision Level";
    this.appApproverFormGroup = this.formBuilder.group({
      allApprovers: this.formBuilder.array([])
    });

  }

  onChange(event) {
    const approver = <FormArray>this.appApproverFormGroup.get('allApprovers') as FormArray;

    if(event.checked) {
      //approver.push(new FormControl(event.source.value))
      this.approvers.push(event.source.value);
      
    } else {
       const i = approver.controls.findIndex(x => x.value === event.source.value);
       approver.removeAt(i);
      this.approvers.filter( itm => itm != event.source.value);
      console.log(this.approvers);
    }
  }

  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  submitRequest(): any{

    let requestor : SubmittorRequest = { ApplicantID : this.currentUser.Id, ApplicantName :this.currentUser.Application.Name, ApplicantEmail : this.currentUser.UserName }
    this.approvalService.submitRequest(requestor).subscribe(res => {
      console.log(res)
    })

    this.router.navigate(['dashboard/mysubmission']);

  }
  mapCultureVariant(source : any): void{
    this.decmk_pnl_title_label = source.decmk_pnl_title_label;
    this.decmk_pnl_makerlist_label = source.decmk_pnl_makerlist_label;
    this.decmk_pc_dmcontroller_label = source.decmk_pc_dmcontroller_label;
    this.decmk_pc_managmentdiv_label = source.decmk_pc_managmentdiv_label;
    this.decmk_approver_label = source.decmk_approver_label;
    this.decmk_allapprover_label = source.decmk_allapprover_label;
    this.decmk_yourapprover_label = source.decmk_yourapprover_label;
    this.decmk_submit_label = source.decmk_submit_label;
    this.decmk_pc_hddevision_label = source.decmk_pc_hddevision_label;
    this.decmk_pc_govcomitte_label = source.decmk_pc_govcomitte_label;
  }

}


