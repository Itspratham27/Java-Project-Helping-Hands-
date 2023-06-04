import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var window : any;

@Component({
  selector: 'app-relief-campaign',
  templateUrl: './relief-campaign.component.html',
  styleUrls: ['./relief-campaign.component.css']
})
export class ReliefCampaignComponent {

  constructor(private _route:Router){
  };

  formModal:any;

  ngOnInit():void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("Donate")
     );    
  }

  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }
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

  Donate(){
    this._route.navigate(["Donation"]);
  }
}
