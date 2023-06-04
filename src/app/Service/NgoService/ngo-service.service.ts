import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgoServiceService {

  constructor(private http: HttpClient) { }

  
  baseurl = "http://localhost:8088/getAllNgo";
  getAllNgo(){
    return this.http.get(`${this.baseurl}`)
  }

  baseurl2 = "http://localhost:8088/deleteNgoId/";
  deleteNgo(ngoId: number){
    return this.http.delete(`${this.baseurl2}` + `${ngoId}`)
  }

  baseurl1 = "http://localhost:8088/addNgo";
  public registerNgo(ngoData: object){
    console.log(ngoData);
    return this.http.post(`${this.baseurl1}`, ngoData)
  }

  baseurl4 = "http://localhost:8088/updateNgo";
  public updateNgo(ngoData: object){
    console.log(ngoData);
    return this.http.put(`${this.baseurl4}`, ngoData)
  }

  baseurl5 = "http://localhost:8088/MainNgoSearch/";
  getIdSearch(Id:number){
    return this.http.get(`${this.baseurl5}` + `${Id}`)
  }

  baseurl6 = "http://localhost:8088/getNgoByName/";
  getNameSearch(name:String){
    return this.http.get(`${this.baseurl6}` + `${name}`)
  }
}
