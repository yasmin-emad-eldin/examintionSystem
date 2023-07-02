import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-admin-page',
  templateUrl: './main-admin-page.component.html',
  styleUrls: ['./main-admin-page.component.scss']
})
export class MainAdminPageComponent {
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
