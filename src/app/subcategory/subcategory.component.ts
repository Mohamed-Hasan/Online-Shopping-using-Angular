import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  catName;
  subcatName;
  products:object[];

  constructor() { }

  ngOnInit() {
    //send to api to get all products of a certain subcategory... should be array of objects
    //subcat name to be sent to server
    let prod1 = {
      name: "iphone",
      price: 800,
      rating:3.5,
      image:null,
      available:5,
      desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
    }

    let prod2 = {
      name: "iphone s6",
      price: 1000,
      rating:4,
      image:null,
      available:5,
      desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
    }
    
    this.products=[prod1,prod2];
    this.catName="electronics";
    this.subcatName="mobiles"
  }

}
