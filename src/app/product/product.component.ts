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
  // product={
  //   name:null,
  //   price:null,
  //   image:null,
  //   rating:null,
  //   amountAvailable:null,
  //   description:null,
  //   sumRating:null,
  //   counter:null,
  //   sellerId:null,
  // };
  product = null;
  userRating=0;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.route.params.subscribe(params => {this.id = params['id']; console.log(this.id)});
    console.log("id in const",this.id)
    this.productService.getProductDetails(this.id).subscribe(res => {
      this.product = res;
      console.log("in my constructor",this.product)
    })
   }

  ngOnInit() {
    console.log("init")
    console.log("id in init",this.id)

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


  rate(){
    this.productService.SendRating(this.product._id,this.userRating).subscribe(res => {
      console.log(res);
    })
    this.productService.getProductDetails(this.id).subscribe(res => {
      this.product = res;
    })
  }
}
