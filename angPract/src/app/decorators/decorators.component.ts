import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click") clickEvent(x:any){
    alert(x);

  }

  @HostListener("mouseleave") ml(){
    console.log("mouse leave");
    this.background="green";
    
  }


  @HostBinding("style.backhround")background="#0f2027";
}
