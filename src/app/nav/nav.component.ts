import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';

import { NgForm } from '@angular/forms';
import { Token } from '@angular/compiler';
import { loginDto } from './loginDto';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
isLoggedIn:boolean = false;
userName:string="";
/**
 *
 */
constructor(public account : AccountService) {
 var currentUser = localStorage.getItem("userToken");
 if(currentUser){
  account.currentUser.next(JSON.parse(currentUser))
 }

}




loginForm(loginForm:NgForm){
  console.log('login form data  is' + loginForm.value );
  
this.account.login(loginForm.value ).subscribe({
  next:response=>{

    if(response.isSuccess && response.httpStatusCode == HttpStatusCode.Ok){
    console.log(`the response is  success ${response.httpStatusCode} and token is ${response.token} and userName is ${response.result}` );
          this.isLoggedIn = true
          this.userName = response.result.toString();
    }
    else{
    console.log(`the response is  not success ${response.httpStatusCode} and token is ${response.errorMessage}` );

    }
   
  },
  error:err=>{
   console.log(err);
   
  }
})
}

logout(){
  this.account.logout();
}

}
