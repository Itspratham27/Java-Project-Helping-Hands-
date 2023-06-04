import { Component } from '@angular/core';
import { AdminService } from 'src/app/Service/AdminService/admin.service';

@Component({
  selector: 'app-getadmin',
  templateUrl: './getadmin.component.html',
  styleUrls: ['./getadmin.component.css']
})
export class GetadminComponent {
  constructor(private adminSer:AdminService){
    this.getadmin();
  };

  admin:any=[{
    adminId: '',
    adminEmailId:'',
    adminPassword: ''
  }]

  admin1:any={
    adminId: '',
    adminEmailId:'',
    adminPassword: ''
  }

  ngOnInit():void{
    this.getadmin();
  }

  public deleteAdmin(adminId:number){
    this.adminSer.deleteAdmin(adminId).subscribe( data => {
      console.log(data);
      this.getadmin();
    })
  }

  public getadmin(){
     this.adminSer.getAllAdmin().subscribe(data=>{
      this.admin = data;
     });
  };

  public updateAdmins(adminNew:object){
    window.alert(adminNew)
    this.admin1 = adminNew;
  }  


  public updateAdmin(){
    window.alert("Won")
    this.adminSer.updateAdmin(this.admin1).subscribe();
  }
  }
  

