import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
declare var collapsefunc: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  docs1 = new Array<any>();
  docsImage = new Array<any>();
  constructor(private _patient_service: PatientServiceService) { }

  ngOnInit(): void {
    this._patient_service.getDocs().subscribe(data=>{
      this.docs1=data;
    })
  }

  callFunction1(){
    // collapsefunc();
  }

}
