import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  get emails(){
    return [
      "pavan@gmail.com",
      "pk@gmail.com",
      "hello@gmail.com",
      "rajkumar@gmail.com",
  ];
  }

  get names(){
    return[
      "pavan","ABC","DEF","GHI","jkl",
    ];
  }
}

