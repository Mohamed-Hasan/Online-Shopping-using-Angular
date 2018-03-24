import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class SalesService {

  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

   getMySales(sellerId){
     return this.http.get(`http://127.0.0.1/sales/${sellerId}`,{headers: this.headers}).map(res=>{
       console.log(res);
       res.json();
     })
   }

}
