import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-services',
  templateUrl: './email-services.component.html',
  styleUrls: ['./email-services.component.css']
})
export class EmailServicesComponent implements OnInit {
  emailAddress:any;
  ename:any;
  constructor(private services:EmailService,) {
    this.emailAddress=this.services.emails;
    this.ename=this.services.names;
   }

  ngOnInit(): void {
  }

}
