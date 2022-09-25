import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { ConSerService } from '../con-ser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _conSer: ConSerService,
    private route: Router) { }

    condata = new Contact('', "",'','','');

  ngOnInit(): void {
  }
  contactfun(){
this._conSer.contactSer(this.condata).subscribe(data=>{

  alert(data.message);
  this.route.navigate([`/home`]);
})

  }

}
