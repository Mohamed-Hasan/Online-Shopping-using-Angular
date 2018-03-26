import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class HomeService {
  headers;
  constructor( private http: Http ) {
    this.headers  = new Headers();
    this.headers.append('Content-Type', 'application/json')
    this.headers.append('x_access_token', localStorage.getItem('token'))
  }

  getProducts(){
    return this.http.get('http://127.0.0.1:9090/home', {headers: this.headers}).map(res=>res.json());
  }

}
