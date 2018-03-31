import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class SalesService {

  headers: Headers;
  constructor(private http: Http) {
   }

   getMySales(token,page){
    var body={
      usertoken:token,
    };
     console.log("in getMySales fn")
     return this.http.post(`https://localhost:9010/orders/sellerorders/${page}`,body).map(res=>{
       console.log(res);
       return res.json();
     })
   }

}
