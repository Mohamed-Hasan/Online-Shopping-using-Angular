import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  order={
    id: null,
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
  constructor(private orderService: OrderService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params => this.order.id = params['id']);
    console.log(this.order.id);

    this.orderService.getOrderDetails(this.order.id).subscribe(res => {
      this.order = res;
    })
  }
  onChange(event){
    this.order.state = event.target.value;
    if(this.order.state=="Recieved")
    {
      this.orderService.deliverOrder(this.order.id)
      console.log(this.order.state);
    //send the new order status to api
    }
  }
}
