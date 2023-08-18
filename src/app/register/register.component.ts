import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
@Output() cancelRegister = new EventEmitter<boolean>();
regModel:any={}

/**
 *
 */
constructor(private account : AccountService) {
  
}

  register(){
    
    this.account.register(this.regModel).subscribe({
      next:res=>{
        console.log(res);
        this.regModel = " ";
      },
      error:err=>{
        console.log('error is '+err[0]);
        
      }
    });
    
  }

  reset(){
    this.regModel = "";
    this.cancelRegister.emit(false);
  }

}
