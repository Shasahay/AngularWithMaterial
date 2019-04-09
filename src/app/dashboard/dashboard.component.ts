import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dsb_title: string;
  sourceLanguageCollection : any;
  dsb_all_label: string;
  dsb_tile2_label : string;
  dsb_tile3_label : string;
  dsb_tile4_label : string;
  dsb_tile5_label : string;
  dsb_tile6_label : string
  dsb_tile7_label : string
  dsb_tile8_label : string
  dsb_tile9_label : string
  constructor(private langService : LanguageService) { }

  ngOnInit() {
    this.langService.eventCallback$.subscribe(d => {
      this.sourceLanguageCollection = d;
      this.mapCultureVariant(this.sourceLanguageCollection);
    })
  }
  mapCultureVariant(source : any): void{
    this.dsb_all_label = source.dsb_all_label;
    this.dsb_tile2_label = source.dsb_tile2_label;
    this.dsb_tile3_label = source.dsb_tile3_label;
    this.dsb_tile4_label = source.dsb_tile4_label;
    this.dsb_tile5_label = source.dsb_tile5_label;
    this.dsb_tile6_label = source.dsb_tile6_label;
    this.dsb_tile7_label = source.dsb_tile7_label;
    this.dsb_tile8_label = source.dsb_tile8_label;
    this.dsb_tile9_label = source.dsb_tile9_label;
    this.dsb_title = source.dsb_title;
  }
}
