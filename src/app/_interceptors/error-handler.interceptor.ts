import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router:Router, private toaser:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler,): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
          if(error){
             switch(error.status){
              case 400:
                if(error.error.errors){
                  const modelStateErrors = []
                  for(const key in error.error.errors){

                    modelStateErrors.push(error.error.errors[key]);
                    
                  }
                  modelStateErrors.flat();
                  modelStateErrors.forEach(x=>this.toaser.error(x))
                  throw modelStateErrors;
                }
                else{
                  this.toaser.error(JSON.stringify(error.status.toString()),error.error.errorMessage);
                }
                break;
                case 404:
                  this.router.navigateByUrl('/not-found');
                  break;
                case 401:
                  this.toaser.error(error.status.toString(),error.error?.errorMessage ? "":"You are not authorized" )
                  break;
                case 500:
                  const navigationExtrac : NavigationExtras = {state:{error:error.error}};
                  this.router.navigateByUrl('/server-error',navigationExtrac);
                  break;  
             }
          }
      throw error
        })
    );
  }
}
