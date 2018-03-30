import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  headers: Headers;
  constructor(private http: Http,private chttp:HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

  getProduct(id){                                                         
    return this.http.get(`https://127.0.0.1:9010/products/${id}`,{headers: this.headers}).map(res=>{
      console.log(res);
      res.json();
    });
  }
  
  // checkout(id,purchases){
  //   return this.http.post('https://127.0.0.1:9010/checkout',{id: id, purchases: purchases},{headers: this.headers}).
  //     map(res=>{
  //       res.json();
  //       console.log(res);
  //   })
  // }


 makeorder(usertoken)
 {

  var body={
    usertoken:usertoken
  };
 
   return this.chttp.post('https://localhost:9010/orders/add',body);
 
  } 


 showcart(utoken)
 {

  var body={
    usertoken:utoken
  };
  return this.chttp.post('https://localhost:9010/users/showcart', body);
 }

 
removeproductfrommycart(productid)
{
  console.log('p id remove cart',productid);
  var utoken=localStorage.getItem('token');
  var body={
    usertoken:utoken
  };
  return this.http.put(`https://localhost:9010/users/removefromcart/${productid}`,body).map(res=>res.json());
}  

updateQuantity(utoken,cart){
  var body={
    usertoken:utoken,
    cart: cart
  };
  return this.http.put(`https://localhost:9010/users/editcart`,body).map(res=>res.json());
}

}
