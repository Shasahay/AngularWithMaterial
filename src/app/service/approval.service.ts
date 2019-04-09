import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubmittorRequest } from '../model/submittorRequest';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class Approvalservice {

  serviceUrl : string = "https://prod-19.southindia.logic.azure.com:443/workflows/970194ff5a6144b6a43451e806200412/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DvQLW58UGO-wxO6gcXtbGkhtfc5586qdCmhxMJluYpA";
  approvalUrl : string = '../assets/data/approvalrecord.json';
  constructor(private http: HttpClient) { }

  submitRequest( applicant : SubmittorRequest) : any{
    return this.http.post<SubmittorRequest>(this.serviceUrl, applicant,httpOptions);
  }

  getRequestStatus():Observable<any>{
    return this.http.get(this.approvalUrl);
  }


}


