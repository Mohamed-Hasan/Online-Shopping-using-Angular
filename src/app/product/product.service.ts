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
    return this.http.get(`https://localhost:9010/products/${productId}`).map(res =>res.json());
   }

   SendRating(productId,rate){
     console.log("rating",rate)
     console.log("prodId",productId)
     return this.http.post(`https://localhost:9010/products/rate/${productId}`,{ rate:rate}).map(res => res.json());
   }


   addproducttocart(utoken,pid){
    console.log('Product Service',utoken,pid);
    var body={
      usertoken:utoken,
      productId:pid
    };
    return this.htttpclient.post<any>('https://localhost:9010/user/addtochart',body);
  }
  


}
