import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chhild',
  templateUrl: './chhild.component.html',
  styleUrls: ['./chhild.component.css']
})
export class ChhildComponent implements OnInit {
@Input()
childdata;
@Output() 
childevent=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
ngDoCheck(){
  this.childevent
}
}
