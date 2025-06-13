import { LoginComponent } from './../../vistas/login/login';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class AuthService{

  private readonly JW_TOKEN='JWT_TOKEN';
  private loggedUser ?:string;
  private isAuthenticatedSuject= new BehaviorSubject<boolean>(false )
 private http = inject(HttpClient);
 private routerService= inject(Router);

 constructor(){}
 login(user:{
  email:string,
  password:string
 }):Observable<any>{
  return this.http.post('http://localhost:8000/api/login',user).pipe(
    tap((response:any)=>this.doLoginUser(user.email,response.token))
  )
 }
 private doLoginUser(email:string,token:any){
  this.loggedUser=email;
  this.storeJwtToken(token);
  this.isAuthenticatedSuject.next(true);
 }

 private storeJwtToken(jwt:string){

  localStorage.setItem(this.JW_TOKEN,jwt);
 }

 logout(){
  localStorage.removeItem(this.JW_TOKEN);
  this.isAuthenticatedSuject.next(false);
  this.routerService.navigate(['/login']);
 }

 getCurrentAuthUser(){
  let token =localStorage.getItem(this.JW_TOKEN);
  return this.http.get('http://localhost:8000/api/me',{
    headers :{
      Authorization: 'Bearer' + token,
    }
  });
 }
isLoggedIn(){
  return this.isAuthenticatedSuject.value;
}

}
