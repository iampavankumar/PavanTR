import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-pract',
  templateUrl: './api-pract.component.html',
  styleUrls: ['./api-pract.component.css']
})
export class ApiPractComponent implements OnInit {

  PractApi="https://api.mocki.io/v1/b043df5a";
  posts:any;
  constructor(private http:HttpClient) {
    this.http.get(this.PractApi).subscribe(data=>{
      console.log(data);
      this.posts=data;
    },error=>{
      console.log(error);
      
    })
   }

  ngOnInit(): void {
  }


  del(post:any){
    console.log(post.name);
    this.http.delete(`${this.PractApi}/${post.name}`).subscribe(()=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

  addData(input:HTMLInputElement){
    let ci:any={city:input.value}
    console.log(ci);
    this.http.put<any>(this.PractApi,ci).subscribe(data=>{
      console.log(data);
      ci.name=data.name;
      console.log(data.name);
      
      this.posts.splice(0,0,ci);
    })

  } 
  
}
