import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { CartService } from "./cart.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user; // global object of user containing his data
  logged = false;  //global variable that check logged users
  cart; //Global Array this should contain products' ids
  purchases: any[];
  checked=false;

  quantity=0;
  Sum;
  constructor(private login_service:LoginService, private CartService: CartService, private router :Router) {

    console.log('home comp');
  console.log('user from global login service',this.login_service.username);

   }
  

  ngOnInit() {
    let prod1 = {
      name: "iphone",
      price: 800,
      rating:3.5,
      image:null,
      quantity:1,
      available:5,
    }

    let prod2 = {
      name: "iphone s6",
      price: 1000,
      rating:4,
      image:null,
      quantity:3,
      available:4,
    }
    /// got to api to get the details of every product
    this.cart.forEach(productId => {
      this.CartService.getProduct(productId).subscribe(res=>{
        this.purchases.push(res);
      })
    });

    this.purchases=[prod1,prod2];
    this.Sum=this.totalToPay();
  }

  cancelOrder(prodName)
  {
    for (let i = 0; i < this.purchases.length; i++) {
      const element = this.purchases[i];
      if (element.name == prodName) {
        this.purchases.splice(i,1)
      }
      console.log(this.purchases);
    }
    this.Sum=this.totalToPay();
  }

  totalToPay(){
    let sum=0;
    for (let i = 0; i < this.purchases.length; i++) {
      sum += this.purchases[i].price*this.purchases[i].quantity;
    }
    this.Sum=sum;
    return sum;
  }

  checkout(){
    //send purchases to api to save in db then show thanks message
    if (this.logged) {
      this.CartService.checkout(this.user.id,this.purchases);
      this.checked = true;
    } else {
      this.router.navigate(['login']);
    }
    
  }

}
