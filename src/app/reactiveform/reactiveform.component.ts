import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
signInForm : FormGroup;
  //  constructor() { }

  // ngOnInit(): void {
  //  this.signInForm =new FormGroup({
  //   email : new FormControl(),
  //  password : new FormControl(),
  //   Skills : new FormGroup({
  //    skill : new FormControl(),
  //    Yoe : new FormControl(),
  //    levelCheck :new  FormControl()
  //  })
      
  //  })
  //  } 
  // or
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signInForm=this.fb.group({
      Email : ['Teja'],
      password :['',[Validators.required,
        Validators.minLength(5),Validators.maxLength(10)]],
      Skills :this.fb.group({
      skill :[''], 
      Yoe : [''],
      levelCheck :['']
    }),
    hobbies:this.fb.array([])
  })
  }
onFormSubmit(){
  console.log(this.signInForm.value);
  
}
get f(){
  return this.signInForm.controls
}
get hobbyControls(){
  return (<FormArray>this.signInForm.get('hobbies')).controls
}
addHobby(){
  const control = this.fb.control('',[Validators.required]);
  (<FormArray>this.signInForm.get('hobbies')).push(control)
}
}
