import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:8088/addAdmin";
  public register(adminData: object){
    console.log(adminData);
    return this.http.post(`${this.baseurl}`, adminData)
  }

  baseurl2 = "http://localhost:8088/getAllAdmin";
  getAllAdmin(){
    return this.http.get(`${this.baseurl2}`)
  }

  baseurl3 = "http://localhost:8088/DeleteAdminById/";
  deleteAdmin(adminId: number){
    return this.http.delete(`${this.baseurl3}` + `${adminId}`)
  }

  baseurl4 = "http://localhost:8088/updateAdmin";
  public updateAdmin(adminData: object){
    console.log(adminData);
    return this.http.put(`${this.baseurl4}`, adminData)
  }

}
