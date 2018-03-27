import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class OrderService {

  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

   getOrderDetails(orderId)
   {
     return this.http.get(`http://localhost:9010/order/${orderId}`, {headers: this.headers}).map(res => res.json());
   }

   deliverOrder(orderId){
     return this.http.put(`http://localhost:9010/order/${orderId}`, {headers: this.headers}).map(res => res.json());
   }
   


}
