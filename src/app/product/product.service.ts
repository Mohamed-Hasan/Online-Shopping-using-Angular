import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class ProductService {

  headers: Headers;
  constructor(private http: Http,private htttpclient:HttpClient) {
    this.headers = new Headers();
    // this.headers.append('Content-Type', 'application/json');
   }

   getProductDetails(productId)
   {
    console.log(productId) 
    return this.http.get(`https://localhost:9010/products/get/${productId}`).map(res =>res.json());
   }

   SendRating(token,productId,rate){
     console.log("rating",rate)
     console.log("prodId",productId)
     var body={
      usertoken:token,
      rate:rate
    };
     return this.http.post(`https://localhost:9010/products/rate/${productId}`,body).map(res => res.json());
   }

  

   addproducttocart(utoken,pid){
    console.log('Product Service',utoken,pid);
    var body={
      usertoken:utoken,
      productId:pid
    };
    console.log('Product service');
    return this.htttpclient.put<any>(`https://localhost:9010/users/addtocart/${pid}`,body);
  }



  


}
