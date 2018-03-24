import { Component, OnInit } from '@angular/core';
import { SalesService } from "./sales.service";
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  orders;
  seller;  //should be set during seller login as a global variable
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    //send to api to get all orders of a certain seller... should be array of objects
    //subcat name to be sent to server
    let order1={
      id: 1,
      product:{
        name: "iphone",
        price: 800,
        rating:3.5,
        image:null,
        available:5,
        desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
      },
      client: {
        id: 1,
        name: "Mohamed Hassan",
        phone: "01097905343",
        email: "mohamed.hassan.pet@gmail.com"
      },
      quantity: 5,
      state: "delivered",
    }

    let order2={
      id: 2,
      product:{
        name: "iphone s6",
        price: 1000,
        rating:4,
        image:null,
        available:5,
        desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
      },
      client: {
        id: 1,
        name: "Ahmed Hassan",
        phone: "01097905343",
        email: "ahmed.hassan.pet@gmail.com"
      },
      quantity: 5,
      state: "delivered",
    }
    this.orders=[order1,order2];

    // this.getMySales();
  }

  getMySales(){
    this.salesService.getMySales(this.seller.id).subscribe(res => {
      this.orders = res;
    });
  }
}