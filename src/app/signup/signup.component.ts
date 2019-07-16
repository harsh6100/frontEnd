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

  user1: User= new User("","","","","");
  constructor(private httpclientService:HttpclientService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
  }


  Sign()
  {
    alert('asfsaf')
    this.httpclientService.createEmployee(this.user1)
        .subscribe(data=>{
          this.router.navigate(['/login']);      
        });
  }


}
