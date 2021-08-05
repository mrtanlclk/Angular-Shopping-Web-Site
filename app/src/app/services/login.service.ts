import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClientModule) { }

  path = "http://localhost:4200/login";

  loggedIn = false;

  login(user: User):boolean{
    if(user.userName == "mert" && user.password == "123"){
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }else return false
  }

  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
