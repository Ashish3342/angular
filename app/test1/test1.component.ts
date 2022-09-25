import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocLogData } from '../doc-log-data';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  outPut = '';
  doctor = '';
  messageOfLogout='';

  constructor(private _docService: DoctorService,
    private route: Router) { }

  ngOnInit(): void {
     this._docService.sharedMessage.subscribe(message => {
      this.doctor=message;
      
    })
  }

  public logMeout():void {
    console.log("hi");
    // this._docService.sharedMessage.subscribe(message => {
    //   // alert("doctor at log out" + message)
      
    // })
    this._docService.logout().subscribe(message => {
      this.messageOfLogout = message.message;
      if(this.messageOfLogout=="logout successfully"){
        this.newMessage("");
      } 
     
    })
// this._docService.sharedMessage.subscribe(message => {
//         alert("doctor1 at log out" + message)
      
//      })

     this.route.navigate([`/docform`]);


  }

  newMessage(str: string) {
    this._docService.nextMessage(str)
  }

}
