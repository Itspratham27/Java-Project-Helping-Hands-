import { Component } from '@angular/core';
import { DonorServiceService } from 'src/app/Service/DonorService/donor-service.service';
import { NgoServiceService } from 'src/app/Service/NgoService/ngo-service.service';
import { DonationComponent } from '../../OurWork/donation/donation.component';
import { Router } from '@angular/router';
import { DonationServiceService } from 'src/app/Service/DonationService/donation-service.service';

@Component({
  selector: 'app-volunteerlogin',
  templateUrl: './volunteerlogin.component.html',
  styleUrls: ['./volunteerlogin.component.css']
})
export class VolunteerloginComponent {
  constructor(private ngoSer:NgoServiceService, private donorSer:DonorServiceService, private donationSer:DonationServiceService, private _route:Router){
    
  };
  
  ngo:any=[{
    ngoId: '',
    ngoName:'',
    ngoAddress: '',
    ngoPincode: '',
    ngoEmailId:'',
    ngoContactNumber: '',
    ngoWebsite:''
  }]


  donor:any=[{
    donorId: '',
    donorName:'',
    donorGender: '',
    donorRegistrationDate: '',
    donorEmailId:'',
    donorContactNumber: '',
    ngoId:'',
    donorAddress:'',
    donorPincode: '',
    donorType:''
  }]

  donor1:any={
    donorId: '',
    donorName:'',
    donorGender: '',
    donorRegistrationDate: '',
    donorEmailId:'',
    donorContactNumber: '',
    ngoId:'',
    donorAddress:'',
    donorPincode: '',
    donorType:''
  }

  donation:any=[{
    donationId: '',
    donationDate:'',
    weekDay: '',
    donationType: '',
    donationQuantity:'',
    ngoId: '',
    donorId:'',
    donationAddress: '',
    donationPincode:''
  }]
 
  Ids:any = '';
  Names:any = '';
  Id:any = '';
  Name:any = '';
  

  ngOnInit():void{
    this.getAllDonors();
  }


  private getAllDonors(){
    this.donorSer.getAllDonor().subscribe(data=>{
     this.donor = data;
    });
 }

  private getAllNgo(){
    this.ngoSer.getAllNgo().subscribe();
  }

  
  public searchIdNgo(Id:number){
    this.ngoSer.getIdSearch(Id).subscribe( data => {
      console.log(data);
      this.ngo = data;
      this.getAllNgo();
    })
  }



  public searchIdDonor(Id:number){
    this.donorSer.getIdSearch(Id).subscribe( data => {
      console.log(data);
      this.donor = data;
      this.getAllDonor();
    })
  }

  private getAllDonor(){
    this.donorSer.getAllDonor().subscribe();
  }

  public searchNameDonor(name:String){
    this.donorSer.getNameSearch(name).subscribe( data => {
      console.log(data);
      this.donor = data;
      this.getAllDonor();
    })
  }

  public updateDonor(){
    window.alert("Donor updated successfully")
    this.donorSer.updateDonor(this.donorSer).subscribe();
    this._route.navigate(["/DonorControls"])
  }

  

  public updateDonors(donorNew:object){
    this.donor1 = donorNew;
  }  


  public searchIdDonation(Id:number){
    this.donationSer.getIdSearch(Id).subscribe( data => {
      console.log(data);
      this.donation = data;
      this.getAllDonation();
    })
  }

  private getAllDonation(){
    this.donationSer.getAllDonation().subscribe();
  }

  public searchNameDonation(name:String){
    this.donationSer.getNameSearch(name).subscribe( data => {
      console.log(data);
      this.donation = data;
      this.getAllDonation();
    })
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

  SignUp(){
    this._route.navigate(["volunteerSignUp"]);
  }
}
