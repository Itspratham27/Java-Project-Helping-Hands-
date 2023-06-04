import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonationServiceService } from 'src/app/Service/DonationService/donation-service.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent {
  constructor(private donationSer:DonationServiceService, private _route:Router){};

  donation:any={
    donationType: '',
    donationQuantity: '',
    ngoId: '',
    donorId: '',
    donationAddress: '',
    donorPincode:''
  }

  onSubmit(){
    window.alert("Donation added successfully")
    this.donationSer.registerDonation(this.donation).subscribe();
    this._route.navigate(["/NGOControls"]);
  }

  cancel(){
    this._route.navigate(["/NGOControls"]);
  }
}

