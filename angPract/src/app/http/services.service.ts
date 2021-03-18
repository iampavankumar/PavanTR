import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {

   }

   getpost(){
    return this.http.get(this.url);
   }
   addpost(post:any){
     return this.http.post(this.url,post);
   }
}
