import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientData } from '../patient-data'
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patien-reg',
  templateUrl: './patien-reg.component.html',
  styleUrls: ['./patien-reg.component.css']
})
export class PatienRegComponent implements OnInit {

  constructor(private _patient_service: PatientServiceService,
    private route: Router) { }
  patData = new PatientData('', "", '', '', '');
  password1: string = '';
  isFormValid=false;

  onSubmitf() {
    console.log(this.patData.first_name, this.patData.last_name, this.patData.username, this.patData.email, this.patData.password, this.password1);
  
    if(this.patData.first_name==''){
      alert('First name cannot be empty');
      return;
    }
    if(this.patData.last_name==''){
      alert('Last name cannot be empty');
      return;
    }
    if(this.patData.username==''){
      alert('username cannot be empty');
      return;
    }
    if(this.patData.email==''){
      alert('email cannot be empty');
      return;
    }
    if((this.patData.password=='') ||(this.password1=='')){
      alert('Password cannot be empty');
      return;
    }

    if (this.patData.password!=this.password1){
      alert("Password must be same");
      return;
    }
    if((this.patData.password==this.password1) && (this.password1.length<8)){
      alert('password must be greater than 8');
      return;
    }
    this._patient_service.RegisterMe(this.patData).subscribe(message=>{
   
    if (message.message=='account created'){
      alert(message.message);
      this.route.navigate([`/patient`]);
    }
    else{
      this.route.navigate([`/patientRegister`]);
    }

    })

    



  }

  ngOnInit(): void {
  }

}
