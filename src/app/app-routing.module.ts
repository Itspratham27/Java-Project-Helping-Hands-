import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNgoComponent } from './Components/NGOComponents/all-ngo/all-ngo.component';
import { ListNgoOnlyComponent } from './Components/NGOComponents/list-ngo-only/list-ngo-only.component';
import { UpdateNgoComponent } from './Components/NGOComponents/update-ngo/update-ngo.component';
import { AddDonorComponent } from './Components/DonorComponents/add-donor/add-donor.component';
import { AddNgoComponent } from './Components/NGOComponents/add-ngo/add-ngo.component';
import { AddDonationComponent } from './Components/DonationComponents/add-donation/add-donation.component';
import { IndexComponent } from './Components/Home/index/index.component';
import { MissionComponent } from './Components/AboutUs/mission/mission.component';
import { DailyFeedingProgramComponent } from './Components/OurWork/daily-feeding-program/daily-feeding-program.component';
import { ReliefCampaignComponent } from './Components/OurWork/relief-campaign/relief-campaign.component';
import { VolunteerloginComponent } from './Components/NGOComponents/volunteerlogin/volunteerlogin.component';
import { ContactusComponent } from './Components/CallToAction/contactus/contactus.component';
import { NgoSignUpComponent } from './Components/PartnerWithUs/ngo-sign-up/ngo-sign-up.component';
import { HotelSignUpComponent } from './Components/PartnerWithUs/hotel-sign-up/hotel-sign-up.component';
import { VolunteerSingnUpComponent } from './Components/PartnerWithUs/volunteer-singn-up/volunteer-singn-up.component';
import { DonationComponent } from './Components/OurWork/donation/donation.component';

const routes: Routes = [
  {path: "", component:IndexComponent},
  {path: "Index", component:IndexComponent},
  {path: "Mission", component:MissionComponent},
  {path: "DailyFeeding", component:DailyFeedingProgramComponent},
  {path: "VolunteerLogin", component:VolunteerloginComponent},
  {path: "ReliefCampaign", component:ReliefCampaignComponent},
  {path: "AdminControls",component:AllNgoComponent},
  {path: "NGOControls",component:ListNgoOnlyComponent},
  {path: "DonorControls",component:UpdateNgoComponent},
  {path: "addDonor",component:AddDonorComponent},
  {path: "addDonation",component:AddDonationComponent},
  {path: "addNgo",component:AddNgoComponent},
  {path: "NgoSignUp",component:NgoSignUpComponent},
  {path: "contactUs", component:ContactusComponent},
  {path: "hotelSignUp", component:HotelSignUpComponent},
  {path: "volunteerSignUp", component:VolunteerSingnUpComponent},
  {path: "Donation", component:DonationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
