import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product={
    name:null,
    price:null,
    image:null,
    rating:0,
    reviewCount:null,
    category:null,
    subcategory:null,
    brand:null,
    desc:null,
    seller:null,
  }
  dummyArray;
  userRating=0;
  constructor() {  }

  ngOnInit() {
    //go to api to get the product and fill the product object
    this.product.rating=3.5;
  }

  getRating(){
    this.dummyArray = [];
    for(var i = 1; i <= 5; i++){
      if(i<=this.product.rating) 
        {this.dummyArray.push(1);}
      else{
        {this.dummyArray.push(0);}
      }
    }
    return this.dummyArray;
  }
}
