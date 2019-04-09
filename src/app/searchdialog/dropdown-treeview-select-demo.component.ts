import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../../lib';
import { ActivitytypeService } from '../service/activitytype.service';
import { Activity } from '../model/activity';

@Component({
    selector: 'ngx-dropdown-treeview-select-demo',
    templateUrl: './dropdown-treeview-select-demo.component.html'
})
export class DropdownTreeviewSelectDemoComponent implements OnInit {
    value: number;
    items: TreeviewItem[];
    activity : Activity;
    activityType : string;
    actDescription : string;
    actSortDesc : string;
    actItems : number[];
    @Output() ActivityTypeChangeEvent = new EventEmitter<Activity>();
    config = TreeviewConfig.create({
        hasFilter: true,
        hasCollapseExpand: true
    });

    constructor(private _activitytypeService : ActivitytypeService ) { }

    ngOnInit() {
        this.items = this._activitytypeService.getActivetyTypes();
    }
    
    onValueChange(value: number) {
        this.activity = this._activitytypeService.getActivityTypeByID(value);
        this.ActivityTypeChangeEvent.emit(this.activity);

    }
}
