import { Component, OnInit } from '@angular/core';
import { TalktoBEService } from '../talkto-be.service';

@Component({
  selector: 'app-interactto-be',
  templateUrl: './interactto-be.component.html',
  styleUrls: ['./interactto-be.component.css']
})
export class InteracttoBEComponent implements OnInit {
products;
  constructor(private interact:TalktoBEService) { }
id;
name;
brand;
price;
  ngOnInit(): void {
    this.getAllProducts();
  }
getAllProducts(){
 this.interact.getProducts().subscribe((res)=>{
   
   
this.products=res;
 })
}
  
addProduct(){
  const newObj={
    id: this.id,
    productName: this.name,
    productBrand :this.brand,
    price : this.price
  }
  this.interact.addTheProduct(newObj).subscribe((res)=>{
    console.log(res);
    
  })
}
updateProduct(){
  const newObj={
    id: this.id,
    productName: this.name,
    productBrand :this.brand,
    price : this.price
  }
  this.interact.updateTheProduct(this.id,newObj).subscribe((res)=>{
    console.log(res);
    
  })
}
deleteProduct(){
this.interact.deleteTheProduct(this.id).subscribe((res)=>{
  console.log(res);
})
}
}

