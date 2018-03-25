import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

  getProduct(id){
    return this.http.get(`http://127.0.0.1:9090/product/${id}`,{headers: this.headers}).map(res=>{
      console.log(res);
      res.json();
    });
  }
  checkout(id,purchases){
    return this.http.post('http://127.0.0.1/checkout',{id: id, purchases: purchases},{headers: this.headers}).
      map(res=>{
        res.json();
        console.log(res);
    })
  }
}
