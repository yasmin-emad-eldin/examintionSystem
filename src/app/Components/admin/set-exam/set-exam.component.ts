import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Modules/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-set-exam',
  templateUrl: './set-exam.component.html',
  styleUrls: ['./set-exam.component.scss']
})
export class SetExamComponent {
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
  add(){}
}
