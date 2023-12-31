import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { loginDto } from '../_models/loginDto';
import { loginResponse } from '../_models/loginResponse';
import { token } from '../_models/token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
//https://localhost:7263/api/Account/login
baseUrl = 'https://localhost:7263/api/'
private currentUser = new BehaviorSubject<token|null>(null);
CurrentUser$ = this.currentUser.asObservable();
constructor(private http:HttpClient) { }


login(login:any):Observable<loginResponse>{
  console.log('login values are' + JSON.stringify(login));
  
return  this.http.post<loginResponse>(this.baseUrl+'Account/login',login)
        .pipe(
          tap((res)=>{
            
            this.currentUser.next(new token(res.result.toString(),res.token));
            localStorage.setItem("userToken",JSON.stringify(new token(res.result.toString(),res.token)));
          })
        )        
}

setCurrentUser(logedInUser:token){
this.currentUser.next(logedInUser);
}
logout(){
  this.currentUser.next(null);
  localStorage.setItem("userToken","");
}


register(register:any):Observable<any>{
return this.http.post<any>('https://localhost:7263/api/'+'Account/register',register);
}

}
