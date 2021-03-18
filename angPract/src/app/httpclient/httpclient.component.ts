import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
ngOnInit() {
}

// public gitApi="https://api.github.com/users";
//  gitUsers:any;
//   constructor(private http:HttpClient) { 
//     this.http.get<any>(this.gitApi).subscribe(data =>{
//       console.log(data);
//       this.gitUsers=data;
//     },error=>{console.log(error);
//     })
//   }


private jsonAPI="https://jsonplaceholder.typicode.com/posts";
posts:any;
constructor(private pavan:HttpClient){
  this.pavan.get(this.jsonAPI).subscribe(data=>{
    console.log(data);
    this.posts=data;
  },error=>{
    console.log(error);
    
  })
}





//add data

addData(input:HTMLInputElement){
  let post:any={title:input.value};
  console.log(post);
  
  this.pavan.post<any>(this.jsonAPI,post).subscribe(data=>{
    // console.log(data);
    post.id=data.id;
    
    this.posts.splice(0,0,post);
    
  })
}


addData1(bIP:HTMLInputElement){
  let bdy:any={body:bIP.value}
  console.log(bdy);
  this.pavan.post<any>(this.jsonAPI,bdy).subscribe(data=>{
    console.log(data);
    bdy.id=data.id;
    this.posts.splice(0,0,bdy)
  })
  
}


delete(post:any){
  console.log(post.id);
  this.pavan.delete<any>(`${this.jsonAPI}/${post.id}`).subscribe(data=>{
  let index=this.posts.indexOf(post);
  this.posts.splice(index, 1)
  })
  
}

}
