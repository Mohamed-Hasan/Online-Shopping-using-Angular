import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  shelf:object[];

  constructor() { }

  ngOnInit() {
    //send to api to get all orders of a certain seller... should be array of objects
    //subcat name to be sent to server
    let product1={
        id: 2,
        name: "iphone",
        price: 800,
        rating:3.5,
        image:null,
        available:5,
        desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
    }

    let product2={
        id: 2,
        name: "iphone s6",
        price: 1000,
        rating:4,
        image:null,
        available:5,
        desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
    }
    this.shelf=[product1,product2];
  }

}