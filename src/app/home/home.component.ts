import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from  '../login.service' ;




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  

  constructor(private login_service:LoginService) { 
    
  }


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
 


  ngOnInit() {
  }


  //  ngDoCheck() { console.log('user from global login service',this.login_service.username);  }

  addToCart(pname) {
    console.log(pname)
  }


}
