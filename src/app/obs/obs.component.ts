import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObserveService } from '../observe.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit, OnDestroy {
data;
dataObs: any;
  constructor(private observe: ObserveService) { }
  

  ngOnInit(): void {
  }


callFunctionCreate(){
  this.dataObs=this.observe.createObservable().subscribe((data)=>{
    console.log(data);
  },err =>{
    console.log(err);
    
  },() => {
    console.log('completed');
  })
    
}
ngOnDestroy(): void {
    this.dataObs.unsubscribe()
}
}

