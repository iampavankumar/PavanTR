import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../http/services.service';

@Component({
  selector: 'app-httpservices',
  templateUrl: './httpservices.component.html',
  styleUrls: ['./httpservices.component.css']
})
export class HttpservicesComponent implements OnInit {

  constructor(private hservices:ServicesService) { }
  posts:any;
  ngOnInit(): void {
    this.hservices.getpost().subscribe(post =>{
      // console.log(post);
      this.posts=post;
    });


  }
}
