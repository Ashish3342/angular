import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocLogData } from './doc-log-data'
import { Observable,BehaviorSubject } from 'rxjs';
import { PatientData } from './patient-data';
import { PatientAptData } from './patient-apt-data';
import { Getslotsclss } from './getslotsclss';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private urllog = 'http://127.0.0.1:9000/patlogin/';

  constructor(private _http: HttpClient) { }

  public logMe(Userdata: DocLogData) {
    return this._http.post<any>(this.urllog, Userdata);
  }

private docregurl='http://127.0.0.1:9000/patReg/';
public RegisterMe(patData: PatientData) {
  return this._http.post<any>(this.docregurl, patData);
}

private parientApturl='http://127.0.0.1:8000/patApt/';
public bookApt(patAptData: PatientAptData) {
  return this._http.post<any>(this.parientApturl, patAptData);
}


private docsurl='http://127.0.0.1:8000/docs'
public getDocs(): Observable<any> {

  return this._http.get<any>(this.docsurl);
}


private getAvalSlots='http://127.0.0.1:8000/getSlot/';
public getSlots(slotsdata: Getslotsclss) {
  return this._http.post<any>(this.getAvalSlots, slotsdata);
}



}
