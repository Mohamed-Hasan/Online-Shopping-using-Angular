import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order={
    product:{
      name:null,
      price:null,
      image: null,
    },
    client:{
      name:null,
      email:null,
      phone:null,
      address:null,
    },
    state: "Ordered",
  }
  constructor() { }

  ngOnInit() {
    console.log(this.order.state);
  }
  onChange(event){
    this.order.state = event.target.value;
    if(this.order.state=="Recieved")
    {
      console.log(this.order.state);
    //send the new order status to api
    }
  }
}
