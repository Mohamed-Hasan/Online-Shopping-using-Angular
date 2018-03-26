import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cart;  //global
  user;
  id;
  product={
    id:0,
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
  userRating=0;
  constructor(private route: ActivatedRoute, private productService: ProductService) {  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']);

    this.productService.getProductDetails(this.id).subscribe(res => {
      this.product = res;
    })
    //go to api to get the product and fill the product object
    // this.product.rating=3.5;


  }

  addToCart(productId){
  
    // let exist = this.cart.indexOf(productId);
    // if(exist == -1)
    // {
    //   this.cart.push(productId);
    // }

      var utoken=localStorage.getItem('token');
      console.log('product name from product comp',productId);
      this.productService.addproducttocart(utoken,productId).subscribe(res=>{
        if(!res.err)
        {
             //product didnt add to db
        }else
        {
          //product  add to db
        }
          
      });
      

  }

/*
  rate(){
    this.productService.SendRating(this.id,this.user.id,this.userRating).subscribe(res => {
      console.log(res);
    })
    this.productService.getProductDetails(this.id).subscribe(res => {
      this.product = res;
    })
  }*/
}
