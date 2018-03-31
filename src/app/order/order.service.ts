import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class OrderService {

  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

   getOrderDetails(orderId)
   {
    console.log("in getOrderDetails")
    console.log(orderId)
    return this.http.get(`https://localhost:9010/orders/${orderId}`).map(res =>res.json());
   }

   deliverOrder(token,orderId){
    var body={
      usertoken:token,
      id: orderId
    }
     return this.http.put(`https://localhost:9010/orders/edit`, body).map(res => res.json());
   }
   


}
