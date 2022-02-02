import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{delay, filter,map,skip,take,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ObserveService {

  constructor() { }
  createObservable(){
    return new Observable((observer)=>{
      let count=0;
      setInterval(()=>{
        count++;
        observer.next(count)
         if(count>8){
           observer.error('i am a error')
         }
   21     // if(count>5){
        //   observer.complete()
        // }
      },1000)
    }).pipe(filter((value:any)=>{
      if(value%2==0){
        return value;
      }
    }),map((value)=>{
      return 'The count is ' +value;
    }),tap((value)=>{
      console.log(value);
    }
    // }),take((2)
      
     ),skip((4)
     ),delay(6000))
    
  }
}
  


