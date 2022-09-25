import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComp } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { Test1Component } from './test1/test1.component';
import { FooterComponent } from './footer/footer.component';
import { LoggedComponent } from './logged/logged.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DocformComponent } from './docform/docform.component';
import { ChangePipe } from './change.pipe';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatienRegComponent } from './patien-reg/patien-reg.component';
import { PatienAppoinmtFrmComponent } from './patien-appoinmt-frm/patien-appoinmt-frm.component';
import { BookedComponent } from './booked/booked.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    FooterComponent,
    LoggedComponent,
    PagenotfoundComponent,
    DocformComponent,
    routingComp,
    ChangePipe,
    LoggedoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PatientFormComponent,
    PatienRegComponent,
    PatienAppoinmtFrmComponent,
    BookedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
