import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  
  checkName(uname:any){
    console.log(uname);
    
  }
  checkPassword(password:any){
    console.log(password.value);
    
  }

  submit(lform:any){
    console.log(lform);
    
  }
  ngOnInit(): void {}



}
