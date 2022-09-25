import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocLogData } from './doc-log-data'
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})





export class DoctorService {

private message = new BehaviorSubject('');
sharedMessage = this.message.asObservable();

private doclinc = new BehaviorSubject('http://127.0.0.1:8000/getpatient/');
docmessage = this.doclinc.asObservable();

  
  private url1 = 'http://127.0.0.1:8000/docs/';
  private urllog = 'http://127.0.0.1:8000/doclogin/';
  private urlgetpat = 'http://127.0.0.1:8000/getpatient/'
 private logouturl='http://127.0.0.1:8000/logouttapi'
  // have to add doctor name to urlgetpat

  constructor(private _http: HttpClient) { }

  public logMe(Userdata: DocLogData) {
    return this._http.post<any>(this.urllog, Userdata);
  }

  public getUsers(): Observable<any> {

    return this._http.get<any>(this.url1);
  }

  public getPat(url:string): Observable<any> {

    return this._http.get<any>(url);
  }
  nextMessage(message: any) {
    this.message.next(message)
  }

  appendDoc(message: any,url:string) {
    this.doclinc.next(url+message)
  }

  public logout(): Observable<any> {

    return this._http.get<any>(this.logouturl);
  }

}
