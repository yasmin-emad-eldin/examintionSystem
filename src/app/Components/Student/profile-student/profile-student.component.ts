import { Component } from '@angular/core';
import { Users } from 'src/app/Modules/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
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
