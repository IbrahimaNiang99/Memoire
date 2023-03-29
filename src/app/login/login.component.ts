import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginserviceService} from "../services/loginService/loginservice.service";
import {TokenService} from "../services/tokenService/token.service";
import {ICredentials} from "../_interfaces/credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService:LoginserviceService,
    private tokenService:TokenService,
    private router:Router) { }


  ngOnInit(): void {
  }

  form:ICredentials={
    userName:'',
    password:''
  }
  testLog(){
    this.router.navigate(['/home/naissance/declaration']);
  }

  login(){
    this.loginService.datalogin(this.form).subscribe(
      res=> {
        console.log(res)
        this.tokenService.saveToken(res.access_token)
      },
      error => console.log(error)
    )
  }


}
