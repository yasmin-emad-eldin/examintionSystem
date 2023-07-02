import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/Modules/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isUserLogged:boolean|undefined
  usrFormGroup: FormGroup;
user:Users|undefined
  constructor( private AuthServices:AuthService,private fb: FormBuilder,private router:Router) {
    this.usrFormGroup=this.fb.group({
      userName:['',[Validators.required]],

     password:['',[Validators.required]],
    })
  }
  get userName(){
    return this.usrFormGroup.get('email');
  }
  get password(){
    return this.usrFormGroup.get('password');
  }
  ngOnInit(): void {
    this.isUserLogged=this.AuthServices.isUserLogged
  }
  login(){
    if(this.usrFormGroup.valid){
    this.AuthServices.getalluser().subscribe(result=>{
      let user=result.find(a=>{
     return   a.userName==this.usrFormGroup.value.userName&&a.password==this.usrFormGroup.value.password
      })
      if(user){
        this.AuthServices.login(this.usrFormGroup.value.userName,this.usrFormGroup.value.password,user.role)
        this.isUserLogged=this.AuthServices.isUserLogged
        alert("you are user")
        if(user.role=="student"){
          this.router.navigate(["/Student/home"])

        }else if(user.role=="admin"){
          this.router.navigate(["/Admin/home"])

        }

      }else{
        alert("you not user")
      }
    })
  }
    

  }
  logout(){
    this.AuthServices.logout()
    this.isUserLogged=this.AuthServices.isUserLogged

  }

}
