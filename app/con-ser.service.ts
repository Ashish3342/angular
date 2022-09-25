import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConSerService {

  constructor(private _http: HttpClient) { }

  private _conUrl='http://127.0.0.1:9500/sendmail/'

  public contactSer(condata: Contact) {
    return this._http.post<any>(this._conUrl, condata);
  }
}
