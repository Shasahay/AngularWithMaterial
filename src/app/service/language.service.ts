import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  languageCollection : any;
  private eventCallback : Subject<any> = new Subject<any>();
  eventCallback$ = this.eventCallback.asObservable();
  constructor(private http: HttpClient) { }

  GetLanguageCollection(lang : string) : any{
    if(lang == "English"){
      this.http.get("../assets/data/languageEN.json").subscribe(res =>{
        if(res !== null && res !== undefined){
            this.eventCallback.next(res);
            return res;
        }
        });
        return null;
    }
    else{
      this.http.get("../assets/data/languageCH.json").subscribe( data => {
        if(data !== null && data !== undefined){
          this.eventCallback.next(data);
            return data;
        }
      })
    }    
  }

    GetEnglishLanguageSupport() : Observable<any>{
      return this.http.get("../assets/data/languageEN.json");
    }

    GetChineseLanguageSupport() : Observable<any>{
      return this.http.get("../assets/data/languageCH.json");
    }

}
