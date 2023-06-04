import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgoServiceService } from 'src/app/Service/NgoService/ngo-service.service';

@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.css']
})
export class AddNgoComponent {
  constructor(private ngoSer:NgoServiceService, private _route:Router){
  };

  ngo:any={
    ngoId: '',
    ngoName:'',
    ngoAddress: '',
    ngoPincode: '',
    ngoEmailId:'',
    ngoContactNumber: '',
    ngoWebsite: ''
  }

  onSubmit(){
    window.alert("Admin added successfully")
    this.ngoSer.registerNgo(this.ngo).subscribe();
    this._route.navigate(["/AdminControls"]);
  }

  cancel(){
    this._route.navigate(["/AdminControls"]);
  }
}
