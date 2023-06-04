import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-sign-up',
  templateUrl: './hotel-sign-up.component.html',
  styleUrls: ['./hotel-sign-up.component.css']
})
export class HotelSignUpComponent {
  constructor(private _route:Router){
  };

  Index(){
    this._route.navigate(["Index"]);
  }

  mission(){
    this._route.navigate(["Mission"]);
  }

  dailyFeeding(){
    this._route.navigate(["DailyFeeding"]);
  }

  ReliefCampaign(){
    this._route.navigate(["ReliefCampaign"]);
  }

  NgoLogin(){
    this._route.navigate(["NGOControls"]);
  }

  VolunteerLogin(){
    this._route.navigate(["VolunteerLogin"]);
  }

  HotelLogin(){
    this._route.navigate(["DonorControls"]);
  }

  AdminLogin(){
    this._route.navigate(["AdminControls"]);
  }

  ContactUs(){
    this._route.navigate(["contactUs"]);
  }
}
