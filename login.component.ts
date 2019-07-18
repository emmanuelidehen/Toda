import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'value';
password = '';
errorMessage = 'invalid credentials';
invalidLogin = true;

  constructor() { }

  ngOnInit() {
   }
handleLogin() {
  console.log(this.username);
  if (this.username === 'value' && this.password === 'dummy') {
    this.invalidLogin = false;
   // console.log(this.errorMessage);
  } else {
    this.invalidLogin = true;
  }

 // console.log(this.password);
}
}
