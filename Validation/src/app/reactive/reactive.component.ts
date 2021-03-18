import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) {}

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm =this.fb.group({
      fname: ['', Validators.required],
    })
    
  }

  get fname(){
    return this.registerForm.get("fname");
  }
}

