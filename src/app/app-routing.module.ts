import { authStudentGuard } from 'src/app/Guards/auth-student.guard';
import { MainlayoutComponent } from './Components/Mainlayout/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanActivateFn } from '@angular/router';
import { Erro404Component } from './Components/404/erro404/erro404.component';
import { TestComponent } from './Components/test/test.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authAdminGuard } from './Guards/auth-admin.guard';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const routes: Routes = [
  {path:"",component:MainlayoutComponent,
  children:[
     {path: '', redirectTo: '/LandingPage', pathMatch: 'full'}, //Default path
     {path:"LandingPage",component:LandingPageComponent},

    {path:"erro",component:Erro404Component},
    // {path:"test",component:TestComponent,canActivate:[authAdminGuard,authStudentGuard]},

    {
      path: 'Student',

      loadChildren: () => import('src/app/Components/Student/student.module')
                            .then(m=>m.StudentModule)
    },
    {
      path: 'Admin',

      loadChildren: () => import('src/app/Components/admin/admin.module')
                            .then(m=>m.AdminModule)
    },

    //  {path:"AddProudect/:Pid/Edite",component:AddProudectComponent},
    // {path:"ProudectDetials/:Pid",component:ProudectDetialsComponent},
    {path:'Login', component:LoginComponent},
    {path:'Register', component:RegisterComponent},
     {path:'Logout', component:LoginComponent},
    {path: '**', component:Erro404Component}
  
          ]
},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
