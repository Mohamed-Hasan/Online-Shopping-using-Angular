import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product1 = {
    id: 2,
    name: "iphone",
    price: 800,
    rating: 3.5,
    image: null,
    available: 5,
    desc: "afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
  }

  product2 = {
    id: 2,
    name: "iphone s6",
    price: 1000,
    rating: 4,
    image: null,
    available: 5,
    desc: "afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
  }
  products = [this.product1, this.product2];
  constructor() { }

  ngOnInit() {
  }

  addToCart(pname) {
    console.log(pname)
  }

}
