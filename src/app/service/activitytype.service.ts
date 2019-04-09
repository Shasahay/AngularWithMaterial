import { Injectable } from '@angular/core';
import { TreeviewItem} from '../../lib';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitytypeService {

  constructor() { }

  getActivetyTypes(): TreeviewItem[] {
    const ExandInvestCate = new TreeviewItem({
        text: 'Expense & Investment', value: 1, collapsed: true, children: [
            { text: 'Fixed Assets', value: 11 },
            { text: 'Land Of Buildings', value: 12 },
            { text: 'Entertainment', value: 13 },
            { text: 'Membership', value: 112 },
            { text: 'Donation', value: 111 },
        ]
    });

    const HrandOrg = new TreeviewItem({
        text: 'HR & Org', value: 10, collapsed: true, children: [
            { text: 'HR', value: 132 },
            { text: 'Others', value: 142 }
        ]
    });

    const ProjCate = new TreeviewItem({
        text: 'Project', value: 1, collapsed: true, children: [
            { text: 'Parent Project', value: 11 },
            { text: 'Single Project', value: 121 },
            { text: 'Sub Project', value: 122 },
        ]
    });
    const OtherCategory = new TreeviewItem({
        text: 'Others', value: 2, collapsed: true, disabled: true, children: [
            { text: 'Test China', value: 215 },
            { text: 'Accounting', value: 214 },
            { text: 'Finance', value: 213 },
            { text: 'External Affairs', value: 211 },
            { text: 'Sales & Marketing', value: 212 },
            { text: 'others', value: 22 }
        ]
    });
    return [ExandInvestCate, HrandOrg, ProjCate, OtherCategory];
}


Activities : Activity[] = [
  { Id :11, ActivityType:'Fixed asset',SortDescription:'Ex and inverst', Description:'I am activity type with ID 11',DefaultItem:[1,2,3] },
  { Id :121, ActivityType:'Single Project', SortDescription:'Project Type',Description:'I am activity type with ID 11',DefaultItem:[0,4] },
  { Id :12, ActivityType:'Land Of Buildings', SortDescription:'Expenses and investements', Description:'I am activity type with ID 11',DefaultItem:[0,1,3] },
  { Id :215, ActivityType:'Test China', SortDescription:'Other types', Description:'I am activity type with ID 11',DefaultItem:[1] },
  { Id :212, ActivityType:'Sales And Marketing', SortDescription:'Other types', Description:'I am activity type with ID 11',DefaultItem:[1,2,3] },
  { Id :22, ActivityType:'Others', SortDescription:'Examples', Description:'I am activity type with ID 11',DefaultItem:[1,2] },
  { Id :132, ActivityType:'HR', SortDescription:'Raw data', Description:'I am activity type with ID 11',DefaultItem:[1,1.0,1.1] },
  { Id :211, ActivityType:'External Affairs',SortDescription:'Sample data', Description:'I am activity type with ID 11',DefaultItem:[1,2.1,2.1] },
]

getActivityTypeByID(id : number) : Activity{
 return this.Activities.find(x=> x.Id == id)
}

}
