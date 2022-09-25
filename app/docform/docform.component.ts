import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocLogData } from '../doc-log-data'
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-docform',
  templateUrl: './docform.component.html',
  styleUrls: ['./docform.component.css']
})
export class DocformComponent implements OnInit {



  constructor(private _docService: DoctorService,
    private route: Router) { }
  docs1 = new Array<any>();
  title = 'test';

  errorMsg = '';
  logData = new DocLogData('', "");
  doctor: string = '';
  z=''


  ngOnInit(): void {
    // this._docService.getUsers().subscribe(response => {
    // console.log(response);
    // this.docs1 = response;
    // console.log(this.docs1[1]);
    // })

    // this._docService.sharedMessage.subscribe(message => {
      // this.doctor = message;
      // console.log(message)
    // })
    

  }

  isLogged = false;



  onSubmit() {
    if(this.logData.userid==""){
      alert("username cannot be left empty");
      return;

    }

    if(this.logData.password==""){
      alert("password cannot be left empty");
      return;

    }

    this._docService.logMe(this.logData).subscribe(

      response => {
        this.doctor = response.message;
        // this.newMessage(this.doctor);
        if(response.message!='invalid credentials'){
          this.newMessage(this.doctor);
          this.route.navigate([`/logged`]);
        }
        else{
          alert(response.message);
        }
      })

    // this.route.navigate([`/logged`]);

  }

  newMessage(str: string) {
    this._docService.nextMessage(str)
  }


}
