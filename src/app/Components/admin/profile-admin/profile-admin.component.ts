import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent {
  user:any
  constructor(private AuthServices:AuthService){}
  ngOnInit(): void {
    this.AuthServices.getalluser().subscribe(result=>{
      let name=localStorage.getItem("userName")
      this.user=result.find(a=>{
        return a.userName==name
      })
    })
  }
}
