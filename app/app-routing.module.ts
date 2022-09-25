import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { LoggedComponent } from './logged/logged.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DocformComponent } from './docform/docform.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatienRegComponent } from './patien-reg/patien-reg.component';
import { PatienAppoinmtFrmComponent } from './patien-appoinmt-frm/patien-appoinmt-frm.component';
import { BookedComponent } from './booked/booked.component';


const routes: Routes = [
   {path: 'test1', component: Test1Component},
   {path: 'logged', component: LoggedComponent},
   {path: 'docform', component: DocformComponent},
   {path: 'logout', component: LoggedoutComponent},
   {path: 'home', component: HomeComponent},
   {path: 'about', component: AboutComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'patient', component: PatientFormComponent},
   {path: 'patientRegister', component: PatienRegComponent},
   {path: 'pntAppt', component: PatienAppoinmtFrmComponent},
   { path: 'booked', component: BookedComponent},

   { path: '**', component:PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComp=[Test1Component,LoggedComponent,PagenotfoundComponent]
