import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  constructor(private http: HttpClient) { }

  
  baseurl = "http://localhost:8088/getAllDonation";
  getAllDonation(){
    return this.http.get(`${this.baseurl}`)
  }

  baseurl2 = "http://localhost:8088/DeleteDonationById/";
  deleteDonation(donationId: number){
    return this.http.delete(`${this.baseurl2}` + `${donationId}`)
  }

  baseurl3 = "http://localhost:8088/addDonation";
  public registerDonation(donationData: object){
    console.log(donationData);
    return this.http.post(`${this.baseurl3}`, donationData)
  }

  baseurl4 = "http://localhost:8088/updateDonation";
  public updateDonation(donationData: object){
    console.log(donationData);
    return this.http.put(`${this.baseurl4}`, donationData)
  }

  baseurl5 = "http://localhost:8088/MainDonationSearch/";
  getIdSearch(Id:number){
    return this.http.get(`${this.baseurl5}` + `${Id}`)
  }

  baseurl6 = "http://localhost:8088/MainDonationName/";
  getNameSearch(name:String){
    return this.http.get(`${this.baseurl6}` + `${name}`)
  }
}
