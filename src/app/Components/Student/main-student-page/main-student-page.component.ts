import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-student-page',
  templateUrl: './main-student-page.component.html',
  styleUrls: ['./main-student-page.component.scss']
})
export class MainStudentPageComponent implements OnInit{
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
