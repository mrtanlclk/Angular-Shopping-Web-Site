import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { LoginService } from '../services/login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }
  loginForm!: FormGroup;

  newLogin(){
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  ngOnInit(): void {
    this.newLogin();
  }
  onSubmit(){
    if (this.loginForm.valid){
      let model = Object.assign({}, this.loginForm.value)
      this.loginService.login(model)
      if(this.loginService.isLoggedIn()){
        this.router.navigateByUrl("/dashboard")
      }
    }

    
  }
}

