import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Activity } from '../model/activity'


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
      activityType = new Subject();
      actDecItem = new Subject();
      itemValue = new Subject();
      constructor() { }
      set theUser(value) {
        this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
        localStorage.setItem('theUser', value);
      }
    
      get theUser() {
        return localStorage.getItem('theUser');
      }

      set setActivityType(value){
         this.activityType.next(value);
         localStorage.setItem('activityType',value)
      }

      get getActivityType(){
        return localStorage.getItem('activityType');
      }

      set setActDecItem(value){
          this.actDecItem.next(value);
          localStorage.setItem('actDecItem', value);
      }

      get GetActDecItem(){
        return localStorage.getItem('actDecItem');
      }

}
