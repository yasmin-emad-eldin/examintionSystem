import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Users } from '../Modules/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedSubject: BehaviorSubject<boolean>;
  private isAdminSubject: BehaviorSubject<boolean>;

private httpoptions
 user:any;
 userArry:Users[]=[];

  constructor(private httpclient:HttpClient) { 
    this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged);
    this.isAdminSubject=new BehaviorSubject<boolean> (this.isAdminLogged);

    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }
  getalluser(): Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.APIURL}/users`);
  }

  login(userName:string,Password:string,role:string){
 
    localStorage.setItem("userName", userName);
    this.isloggedSubject.next(true);

    if(role=="admin"){
    localStorage.setItem("role", role);
    this.isAdminSubject.next(true);
    }
  }
  logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("role")
    this.isloggedSubject.next(false);

    this.isloggedSubject.next(false);
  }
  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('userName'))? true: false
  }

  get isAdminLogged(): boolean
  {
    return  (localStorage.getItem('role'))? true: false
  }
  getloggedStatus(): Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }
  getAdminloggedStatus(): Observable<boolean>
  {
    return this.isAdminSubject.asObservable();
  }

  getSingleUser(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.APIURL}/users/${id}`);

  }
  addNewUser(newUser:Users):Observable<Users>{

    return this.httpclient.post<Users>(`${environment.APIURL}/users`

                                    ,JSON.stringify(newUser),

                                              this.httpoptions)

                                              .pipe(

                                                retry(3),catchError((err)=>{

                                                  return throwError(()=>{

                                                    return new Error('Error occured please try again.')

                                                  })

                                                })

                                              )

    }
}
