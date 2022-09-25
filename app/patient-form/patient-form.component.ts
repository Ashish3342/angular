import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocLogData } from '../doc-log-data'
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  constructor(private _patient_service: PatientServiceService,
    private route: Router) { }
    logData = new DocLogData('', "");

  ngOnInit(): void {
    
  }
  onSubmitp() {
     if(this.logData.userid==''){
      alert("Username cannot be empty");
      return;
     }
     if(this.logData.password==''){
      alert("password cannot be empty");
      return;
     }

    this._patient_service.logMe(this.logData).subscribe(

      response => {
       console.log(response.message);
       if(response.message!='invalid credentials'){
        this.route.navigate([`/pntAppt`]);
       }
       else{
        alert(response.message);
       }
        
      })

    // this.route.navigate([`/pntAppt`]);


  }

}
