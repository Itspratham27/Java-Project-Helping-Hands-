import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DonationServiceService } from 'src/app/Service/DonationService/donation-service.service';
import { DonorServiceService } from 'src/app/Service/DonorService/donor-service.service';
import { NgoServiceService } from 'src/app/Service/NgoService/ngo-service.service';

@Component({
  selector: 'app-all-ngo',
  templateUrl: './all-ngo.component.html',
  styleUrls: ['./all-ngo.component.css']
})
export class AllNgoComponent {
    constructor(private ngoSer:NgoServiceService, private donorSer:DonorServiceService, private donationSer:DonationServiceService, private _route:Router){
      this.getNgo();
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



    Idz:any = '';
    Namez:any = '';
    Ids:any = '';
    Names:any = '';
    Id:any = '';
    Name:any = '';
    

    ngOnInit():void{
      this.getNgo();
    }
  
  
    gotaddNgo(){
      this._route.navigate(["/addNgo"]);
    }

    private getNgo(){
       this.ngoSer.getAllNgo().subscribe(data=>{
        this.ngo = data;
       });
    }

    public deleteNgo(ngoId:number){
      this.ngoSer.deleteNgo(ngoId).subscribe( data => {
        console.log(data);
        this.getNgo();
      })
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

    public searchNameNgo(Name:String){
      this.ngoSer.getNameSearch(Name).subscribe( data => {
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

}
