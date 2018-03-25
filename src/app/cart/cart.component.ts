import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchases;
  checked=false;
  constructor(private login_service:LoginService) {console.log('home comp');
  console.log('user from global login service',this.login_service.username); }

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
      quantity:1,
      available:4,
    }
    
    this.purchases=[prod1,prod2];
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
  }

  totalToPay(){
    let sum=0;
    for (let i = 0; i < this.purchases.length; i++) {
      sum += this.purchases[i].price;
    }
    return sum;
  }

  checkout(){
    //send purchases to api to save in db then show thanks message
    this.checked = true;
  }

}
