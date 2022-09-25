import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocLogData } from '../doc-log-data';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-loggedout',
  templateUrl: './loggedout.component.html',
  styleUrls: ['./loggedout.component.css']
})
export class LoggedoutComponent implements OnInit {
 

  constructor(private _docService: DoctorService,
    private route: Router) { }

  ngOnInit(): void {
  



  }
 

  

}
