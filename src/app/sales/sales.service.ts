import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class SalesService {

  headers: Headers;
  constructor(private http: Http) {
   }

   getMySales(sellerId){
     console.log("in getMySales fn")
     return this.http.get(`https://localhost:9010/orders/sellerorders/${sellerId}`).map(res=>{
       console.log(res);
       return res.json();
     })
   }

}
