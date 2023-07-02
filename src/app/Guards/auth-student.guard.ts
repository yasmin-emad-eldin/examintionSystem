
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authStudentGuard implements CanActivate {
  constructor(private authUserStudent:AuthService
    ,private router:Router){}
  canActivate(
      route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authUserStudent.isUserLogged){
        return true;
      }
      else{
        alert("not student");
          this.authUserStudent.logout()
          
          this.router.navigate(['/Logout']);

        
        

        return false;
      }
      }
    }


