import { HttpclientService } from './../services/httpclient.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../services/httpclient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg:string;
  user1: User= new User("","","","","");
  constructor(private httpclientService:HttpclientService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
  }


  Sign()
  {
    
    this.httpclientService.createEmployee(this.user1)
        .subscribe(data=>{
         if(data){
          this.router.navigate(['/login']);
          alert("User Created")
        }      
        else {
          this.msg="Username Already Exists";
        }
        });
  }


}
