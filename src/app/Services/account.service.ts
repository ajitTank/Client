import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDto } from '../nav/loginDto';
import { loginResponse } from '../nav/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
//https://localhost:7263/api/Account/login
baseUrl = 'https://localhost:7263/api/'

constructor(private http:HttpClient) { }


login(login:loginDto):Observable<loginResponse>{
return  this.http.post<loginResponse>(this.baseUrl+'Account/login',login);
}




}
