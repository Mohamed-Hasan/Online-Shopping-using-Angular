import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class HomeService {
  headers;
  constructor( private http: Http,private htttpclient:HttpClient ) {
    this.headers  = new Headers();
    this.headers.append('Content-Type', 'application/json')
  }

  getProducts(){
    return this.http.get('http://localhost:9090/home', {headers: this.headers}).map(res=>res.json());
  }

  
  addproducttocart(utoken,pid){
    console.log(utoken,pid);
    var body={
      usertoken:utoken,
      productId:pid
    };
    console.log('Home service');
    return this.htttpclient.put<any>(`https://localhost:9010/user/addtocart/${pid}`,body);

  }



}
