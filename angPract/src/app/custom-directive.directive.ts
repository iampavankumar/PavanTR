import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.background="linear-gradient(to right, #c9ffbf, #ffafbd)";
    el.nativeElement.style.color="#870000";
   }


}
