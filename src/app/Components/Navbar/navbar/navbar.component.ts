import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  isUserLogged:boolean|undefined
  isAdminLogged:boolean|undefined

  constructor(private AuthServices:AuthService) {
    this.isUserLogged=AuthServices.isUserLogged
  }
  ngOnInit(): void {
    this.AuthServices.getloggedStatus().subscribe(status=>{this.isUserLogged=status
      console.log(`"student"${this.isUserLogged}`);
      

    })
    this.AuthServices.getAdminloggedStatus().subscribe(status=>{this.isAdminLogged=status
      console.log(`"admin"${this.isAdminLogged}`)


    })
  }
  logout(){
    this.AuthServices.logout()
    this.isUserLogged=this.AuthServices.isUserLogged
    this.isAdminLogged=this.AuthServices.isAdminLogged
  }
 }


