import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';

@Injectable()
export class AddProductService{
    headers;
    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append('X-ACCESS_TOKEN', localStorage.getItem('token'));
    };

    addProduct(utoken,product){
        var body={
            usertoken:utoken,
            product:product
          };
        // const prod = JSON.stringify(product)
        return this.http.post('https://localhost:9010/products/add', body).map((res)=>res.json())
    }

    getSubCategories(subcatId){
        return this.http.get(`https://localhost:9010/categories/${subcatId}`).map(res=>res.json());
    }

    getProduct(prodId){
        return this.http.get(`https://localhost:9010/products/${prodId}`).map(res=>res.json());
    }

    editProduct(token,prodId, product){
        var body={
            usertoken:token,
            productId: prodId,
            product:product
          };
        // const prod = JSON.stringify(product)
        return this.http.post(`https://localhost:9010/products/edit/${prodId}`,body).map(res=>res.json());
    }
}