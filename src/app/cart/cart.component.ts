import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  purchases;
  checked=false;
  Sum;
  constructor() { }
  quantity=0;
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
    this.checked = true;
  }

}
