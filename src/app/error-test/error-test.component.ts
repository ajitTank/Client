import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.css']
})
export class ErrorTestComponent {

ValiationError:string[] =[];

/**
 baseUrl = 'https://localhost:7263/api/'
 **/
constructor(private http:HttpClient) {

}

//success
// getSuccess(){
//   this.http.get('https://localhost:7263/api/'+'Buggy/success',{ ...Option, responseType: 'text' }).subscribe({
//   next:response=>{console.log( 'response from next '+ response)},

//   error:(error:HttpErrorResponse)=>console.log('response from error ' + JSON.stringify(error) ),
  
//   complete:()=>console.log('succes request is completed')
  
// })
// }

getSuccess(){
  this.http.get('https://localhost:7263/api/'+'Buggy/success').subscribe({
  next:response=>{console.log( 'response from next '+ response)},

  error:(error:HttpErrorResponse)=>console.log('response from error ' + JSON.stringify(error) ),
  
  complete:()=>console.log('succes request is completed')
  
})
}

//BadRequest
get400Error(){
this.http.get('https://localhost:7263/api/'+'Buggy/bad-request').subscribe({
  next:response=>{console.log( 'response from next '+ response)},
  // error:(error:HttpErrorResponse)=>console.log('response from error ' + JSON.stringify(error)  )
  error:(err)=>console.log(err)
})
}

//Not Found
get404Error(){
  this.http.get('https://localhost:7263/api/'+'account/password/reset').subscribe({
    next: response=>console.log(response),
    error:err=>console.log(err)
  })
}

//internal Server Error
get500Error(){
  this.http.get('https://localhost:7263/api/'+'Buggy/server-error').subscribe({
    next: response=>console.log(response),
    error:err=>console.log(err)
  })
}

getValidationError(){
  this.http.post('https://localhost:7263/api/Account/register',{}).subscribe({
    next:(res)=>console.log('next ' + res),
    error:(error)=>{
      console.log('error is '+ JSON.stringify(error));
      this.ValiationError = error   
    } 
  })
}

get401Error(){
  this.http.get('https://localhost:7263/api/'+'Buggy/auth').subscribe({
    next: response=>console.log(response),
    error:err=>console.log(err)
  })
}

}
