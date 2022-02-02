import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TalktoBEService {

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any>('http://localhost:3000/package')
  
    
  }
  addTheProduct(product){
    return this.http.post<any>('http://localhost:3000/package',product)
  
    
  }
  updateTheProduct(id,product){
    return this.http.put<any>('http://localhost:3000/package/'+id,product)
  }
  deleteTheProduct(id){
    return this.http.delete<any>('http://localhost:3000/package/'+id)
}
}
