import { Component, OnInit } from '@angular/core';
import { PatientAptData } from '../patient-apt-data';
import { NavigationExtras,Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { Getslotsclss } from '../getslotsclss';

@Component({
  selector: 'app-patien-appoinmt-frm',
  templateUrl: './patien-appoinmt-frm.component.html',
  styleUrls: ['./patien-appoinmt-frm.component.css']
})
export class PatienAppoinmtFrmComponent implements OnInit {
  datetoday: Date = new Date();

  constructor(private _patient_service: PatientServiceService,
    private route: Router) { }
  pntAptdt = new PatientAptData('', '', 0, '', '', 1, this.datetoday, '');
  docs1 = new Array<any>();
  avSlots = new Array<any>();
  sltData =new Getslotsclss(0, this.datetoday);

  ngOnInit(): void {
this._patient_service.getDocs().subscribe(data=>{
  this.docs1=data;
})


  }
  onSubmitapt() {
    console.log(this.pntAptdt);
    if (this.pntAptdt.full_name == '') {
      alert("Name Cannot be empty");
      return;
    }
    if (this.pntAptdt.mobile_number == '') {
      alert("mobile Cannot be empty");
      return
    }
    if (this.pntAptdt.mobile_number.length != 10) {
      alert("mobile number must be 10 digits");
      return
    }
    if (this.pntAptdt.describe_problem_in_few_words == '') {
      alert("please wite something about your problem");
      return
    }

    this._patient_service.bookApt(this.pntAptdt).subscribe(message => {
      alert(message.message);

     
      
      this.route.navigate(['/booked',this.pntAptdt]);

    })



  }


 

  checkAvailability(){

    this.sltData.doctor = this.pntAptdt.doctor;
    this.sltData.date=this.pntAptdt.date;


    this._patient_service.getSlots(this.sltData).subscribe(data=>{
      alert(data.message);
      this.avSlots=data.message;
      console.log(this.avSlots[0]);
    })

  }

}
