import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ShelfService {
header;
  constructor(private http: Http) { 
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    // this.header.append('x_access_token',localStorage.getItem('token'))
  }
  
  getShelf(sellerId,page){
    return this.http.get(`https://localhost:9010/products/stock/${sellerId}/${page}`, {headers: this.header}).map(res=>res.json());
  }
}
