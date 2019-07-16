


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public Fname:string,
    public Lname:string,
    public email:string,
    public Uname:string,
    public pass:string,
  ) {}
}
export class Login{
  constructor(
       public user:string,
       public passwd:string,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
 

  constructor(private httpClient:HttpClient) { }
  public createEmployee(User) {
    
  
    return this.httpClient.post<User>("http://localhost:8095/employees", User);
  }
 
  public login(Login) { 
    
    alert(JSON.stringify(Login))
    return this.httpClient.post<Login>("http://localhost:8095/employees/logincheck", Login)
  }
}
