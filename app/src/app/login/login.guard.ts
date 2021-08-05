import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";



@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private loginservice: LoginService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.loginservice.isLoggedIn();
        if (logged) {
            return true
        } 
        this.router.navigate(["login"]);
        return false
    }


}