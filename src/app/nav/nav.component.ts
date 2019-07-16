import { AppComponent } from './../app.component';
import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  

  constructor(private authenticationService: AuthenticationService ){ }

  ngOnInit() {   
   

}
}
