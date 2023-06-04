import { Component } from '@angular/core';
import { AdminService } from 'src/app/Service/AdminService/admin.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent {
  constructor(private adminSer:AdminService){};

  admin:any={
    adminId: '',
    adminEmailId:'',
    adminPassword: ''
  }

  onSubmit(){
    this.adminSer.register(this.admin).subscribe();
  }
}
