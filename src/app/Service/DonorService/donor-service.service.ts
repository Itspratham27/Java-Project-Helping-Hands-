import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorServiceService {

  constructor(private http: HttpClient) { }

  
  baseurl = "http://localhost:8088/getAllDonor";
  getAllDonor(){
    return this.http.get(`${this.baseurl}`)
  }

  baseurl2 = "http://localhost:8088/deleteDonorById/";
  deleteDonor(donorId: number){
    return this.http.delete(`${this.baseurl2}` + `${donorId}`)
  }

  baseurl3 = "http://localhost:8088/addDonor";
  public registerDonor(donorData: object){
    console.log(donorData);
    return this.http.post(`${this.baseurl3}`, donorData)
  }

  baseurl4 = "http://localhost:8088/updateDonor";
  public updateDonor(donorData: object){
    console.log(donorData);
    return this.http.put(`${this.baseurl4}`, donorData)
  }

  baseurl5 = "http://localhost:8088/MainDonorSearch/";
  getIdSearch(Id:number){
    return this.http.get(`${this.baseurl5}` + `${Id}`)
  }

  baseurl6 = "http://localhost:8088/MainDonorName/";
  getNameSearch(name:String){
    return this.http.get(`${this.baseurl6}` + `${name}`)
  }
  
}
