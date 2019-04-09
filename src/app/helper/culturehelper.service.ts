import { Injectable } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CulturehelperService {
  languageCollection : any
  constructor(private _languageService : LanguageService) { }
    
  GetTranslatedText(language : string) : Observable<any> {
   var transText : string;
    if(language == 'English'){
      this._languageService.GetEnglishLanguageSupport().subscribe(data => {
        // console.log(data);
        // console.log(data.username)
       this.languageCollection = data; 
    });
    }
    else{
      this._languageService.GetChineseLanguageSupport().subscribe(data => {
       this.languageCollection = data; 
    });
  }
  return this.languageCollection;
  }
}
