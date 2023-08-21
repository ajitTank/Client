import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit{
   value:any ;
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  
  
} 

/**
 *
 */
constructor(public router:Router , private activateRoute:ActivatedRoute) {
  this.value =   this.router.getCurrentNavigation()?.extras?.state?.['error'];
  console.log(this.value);

  
}


}
