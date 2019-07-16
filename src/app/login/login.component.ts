import { HttpclientService } from './../services/httpclient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../services/httpclient.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  msg:string=""

 
  user1: Login= new Login("","");
  
  
 


  constructor(private formBuilder: FormBuilder,
      private loginservice: AuthenticationService,private router: Router,private httpclientService:HttpclientService) { }
      
  ngOnInit() {
    
  }

  
  

 checkLogin() {
    
    (this.loginservice.login(this.user1).subscribe(   
          data => {
            if(data)
            {
              
          this.router.navigate(['/dashboard']);                     
            }
            else{
              this.msg="Invalid Username and Password";
              }
       },
     

          
      )
     );
       }
   
// checklogin()
// {
//     alert(JSON.stringify(this.user1))
//     this.httpclientService.login(this.user1)
//         .subscribe(data=>{
//           alert("Login successful");
//         });
// }

   
  }
  