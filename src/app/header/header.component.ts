import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { User } from '../model/user';
import { LanguageService } from '../service/language.service';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None  
})
export class HeaderComponent implements OnInit {
  appTitle : string;
  userName : string;
  currentUser : User;
  Languages : string[];
  languageItemCollection : any;
  language : string;
  header_about_label : string;
  header_contact_label : string;
  lang : string;
  sourceLanguageCollection : Observable<any> = new Observable();
  
  constructor(private _globalService: GlobalService, private langService : LanguageService ) { 
    _globalService.itemValue.subscribe((nextValue) => {
      let usr = JSON.parse(nextValue as string)
      this.userName = usr.Name;  // this will happen on every change
   })
  }

  ngOnInit() {
    this.language = localStorage.getItem('language')
    this.sourceLanguageCollection = this.langService.GetLanguageCollection(this.language);
    

    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.languageMap(this.sourceLanguageCollection);
    })
    
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if(this.currentUser != undefined || this.currentUser != null)
      this.userName = this.currentUser.Name
    else
    this.userName = this.userName != null ? this.userName : "";
     this.Languages = ['English', 'Chinese'];
  }

  selectedLang(event : any){
    let target = event.source.selected._element.nativeElement;
    this.language = target.innerText.trim();
    localStorage.removeItem('language');
    localStorage.setItem('language', this.language)  // later move this to global
    this.languageItemCollection = this.langService.GetLanguageCollection(this.language);
    //this.languageMap(this.languageItemCollection);
  }

    private languageMap(sourceCollection : any){
      this.appTitle = sourceCollection.aptitle;
      this.header_about_label = sourceCollection.header_about_label;
      this.header_contact_label = sourceCollection.header_contact_label;
    }

  GetLanguageText(lType : string){
   //     this.appTitle = this.CultureCollection.
  }
}
