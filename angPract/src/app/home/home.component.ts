import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checkname(x:any){
    console.log(x.value);
    
  }

  mailcheck(email:any){
    console.log(email.value);
    
  }


  checkpass(password:any){
    console.log(password.value);
    
  }

  submit(pass:any){
    console.log(pass);
    
  }


}
