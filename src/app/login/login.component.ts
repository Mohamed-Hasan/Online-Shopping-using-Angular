import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {  }

  ngOnInit() {

  }

  submit() {
    var user: object ={
      email: this.email,
      password: this.password,
    }
    console.log("submit");
    //should send user to service then api
  }
}
