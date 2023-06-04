import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var window : any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
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
}
