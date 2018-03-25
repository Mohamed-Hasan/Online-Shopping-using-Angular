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
        this.headers.append('x_access_token', localStorage.getItem('token'));
    };

    addProduct(product){
        const prod = JSON.stringify(product)
        return this.http.post('https://127.0.0.1:9010/products/add', prod ,{headers: this.headers}).map((res)=>res.json())
    }
}