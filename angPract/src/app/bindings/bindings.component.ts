import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // property Binding

  imgB="https://cdn.pixabay.com/photo/2021/02/02/21/18/dandelion-5975473_1280.jpg";

  // Class Binding

  isTrue="true";

  ColSpan=3;

  isColor="true" ;


  clickEvent(){
    alert("this is event Binding");
  }


  keyupEvent(x:any){
    console.log(x.target.value);
  }
  uname="ABCD";
}
