import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminaddComponent } from './Components/AdminComponents/adminadd/adminadd.component';
import { GetadminComponent } from './Components/AdminComponents/getadmin/getadmin.component';
import { AddDonationComponent } from './Components/DonationComponents/add-donation/add-donation.component';
import { AddDonorComponent } from './Components/DonorComponents/add-donor/add-donor.component';
import { AllNgoComponent } from './Components/NGOComponents/all-ngo/all-ngo.component';
import { UpdateNgoComponent } from './Components/NGOComponents/update-ngo/update-ngo.component';
import { AddNgoComponent } from './Components/NGOComponents/add-ngo/add-ngo.component';
import { ListNgoOnlyComponent } from './Components/NGOComponents/list-ngo-only/list-ngo-only.component';
import { IndexComponent } from './Components/Home/index/index.component';
import { MissionComponent } from './Components/AboutUs/mission/mission.component';
import { DailyFeedingProgramComponent } from './Components/OurWork/daily-feeding-program/daily-feeding-program.component';
import { DonationComponent } from './Components/OurWork/donation/donation.component';
import { ReliefCampaignComponent } from './Components/OurWork/relief-campaign/relief-campaign.component';
import { HotelSignUpComponent } from './Components/PartnerWithUs/hotel-sign-up/hotel-sign-up.component';
import { NgoSignUpComponent } from './Components/PartnerWithUs/ngo-sign-up/ngo-sign-up.component';
import { VolunteerSingnUpComponent } from './Components/PartnerWithUs/volunteer-singn-up/volunteer-singn-up.component';
import { VolunteerloginComponent } from './Components/NGOComponents/volunteerlogin/volunteerlogin.component';
import { ContactusComponent } from './Components/CallToAction/contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminaddComponent,
    GetadminComponent,
    AddDonationComponent,
    AddDonorComponent,
    AllNgoComponent,
    UpdateNgoComponent,
    AddNgoComponent,
    ListNgoOnlyComponent,
    IndexComponent,
    MissionComponent,
    DailyFeedingProgramComponent,
    DonationComponent,
    ReliefCampaignComponent,
    HotelSignUpComponent,
    NgoSignUpComponent,
    VolunteerSingnUpComponent,
    VolunteerloginComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
