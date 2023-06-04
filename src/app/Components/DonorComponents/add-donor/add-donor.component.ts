import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonorServiceService } from 'src/app/Service/DonorService/donor-service.service';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent {
  constructor(private donorSer:DonorServiceService, private _route:Router){};

  donor:any={
    donorId: '',
    donorName:'',
    donorGender: '',
    donorEmailId: '',
    donorContactNumber:'',
    ngoId: '',
    donorAddress: '',
    donorPincode:'',
    donorType: ''
  }

  onSubmit(){
    window.alert("Donor added successfully")
    this.donorSer.registerDonor(this.donor).subscribe();
    this._route.navigate(["/NGOControls"]);
  }

  cancel(){
    this._route.navigate(["/NGOControls"]);
  }
}
