import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocLogData } from '../doc-log-data'
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  patienturl = '';
  doctor = ''
  urlgetpat = 'http://127.0.0.1:8000/getpatient/';
  patint = new Array<any>();
  pdate = new Array<any>();
  user = new Array<any>();
  unique:any='';
  slot=[ "1", "2", "3", "4"]
  noPat='No Patient';

  constructor(private _docService: DoctorService,
    private route: Router) { }

  ngOnInit(): void {
    // $(document).ready(function() {
      // alert('I am Called From jQuery');
    // });


    // this._docService.getPat().subscribe(message=>this.patint=message)
    this._docService.sharedMessage.subscribe(message => {
      this.doctor = message;
       console.log(message)
      this.example();
    })
  }
  public example(): void 
  {
      // console.log(this.doctor); // <-- it has value here.
      this.patienturl=this.urlgetpat+this.doctor;
      // console.log(this.urlgetpat)
      this._docService.getPat(this.patienturl).subscribe(message=>{
        this.patint=message;
      for(let pat of this.patint){
        //this.pdate=pat.date;
        this.pdate.push(pat.date);
      }
      this.unique = [...new Set(this.pdate)];
      
      })
     
      
  }

  //  add(x: string, y: string): string {
  // return x + y;
  // }

  // newMessage(str: string) {
  // this._docService.nextMessage(str)
  // }
  appendDoc(str: string) {
    this._docService.nextMessage(str)
  }

  public identifiantsAreEqual(udate:string,uslot:string,s:string,dates:string) : boolean {
    if(udate==dates && uslot ==s)
    {
      return true;}
     
    else{return false;}
   
 }
 public imchanging(patname:string){
  this.noPat=patname;
 }

 public open( user:any) {
  alert("Name : "+user.full_name+'\n'
  +"Mobile number : "+user.mobile_number+'\n'
  +"Age : "+user.age+'\n'
  +"Gender : "+user.gender+'\n'
  +"Problem : "+user.describe_problem_in_few_words+'\n'
  +"Date Booked : "+user.date+'\n'
  +"Slot Booked : "+user.slots+'\n'
  
  );
}

}

