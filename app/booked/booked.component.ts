import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NavigationExtras,Router } from '@angular/router';
import { PatientAptData } from '../patient-apt-data';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {

  full_name:string | null | undefined;
  mobile_number:string | null | undefined;
  age:string | null | undefined;
  gender:string | null | undefined;
  describe_problem_in_few_words:string | null | undefined;
  doctor:string | null | undefined;
  date:any
  slots:string | null | undefined;
  datetoday: Date = new Date();
  docs1 = new Array<any>();
  z=0;
 
  constructor(private route: ActivatedRoute,private _patient_service: PatientServiceService) {
    
   }

  ngOnInit(): void {
    this.full_name=this.route.snapshot.paramMap.get('full_name')
    this.mobile_number=this.route.snapshot.paramMap.get('mobile_number')
    this.age=this.route.snapshot.paramMap.get('age')
    this.gender=this.route.snapshot.paramMap.get('gender')
    this.describe_problem_in_few_words=this.route.snapshot.paramMap.get('describe_problem_in_few_words')
    this.date=this.route.snapshot.paramMap.get('date')
    this.doctor=this.route.snapshot.paramMap.get('doctor')
    this.slots=this.route.snapshot.paramMap.get('slots')
    this.z=Number(this.doctor)
  
    this._patient_service.getDocs().subscribe(data=>{
      this.docs1=data;
    })
  
  }

  printit(){
 window.print()

  }


}
