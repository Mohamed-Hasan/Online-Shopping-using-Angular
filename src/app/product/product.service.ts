import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {

  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

   getProductDetails(productId)
   {
     return this.http.get(`http://127.0.0.1/order/${productId}`, {headers: this.headers}).map(res => res.json());
   }

   SendRating(productId,rate){
     return this.http.put(`http://127.0.0.1/order/${productId}`,{rate:rate}, {headers: this.headers}).map(res => res.json());
   }
}
