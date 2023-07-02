import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { RouterModule, Routes } from '@angular/router';
import { authStudentGuard } from 'src/app/Guards/auth-student.guard';
import { MainStudentPageComponent } from './main-student-page/main-student-page.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';

const routes: Routes =[
  {path:'', redirectTo: '/Student/exam', pathMatch:'full'},
  {path:'exam', component: TakeExamComponent,canActivate:[authStudentGuard]},
  {path:'home', component: MainStudentPageComponent,canActivate:[authStudentGuard]},
  {path:'profile', component: ProfileStudentComponent,canActivate:[authStudentGuard]},

]


@NgModule({
  declarations: [
    TakeExamComponent,
    MainStudentPageComponent,
    ProfileStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class StudentModule { }
