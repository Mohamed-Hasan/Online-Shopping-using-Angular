import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SubcategoryService {

  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token',localStorage.getItem('token')); 
   }

   getSubCatProducts(subCatId){
     return this.http.get(`https://localhost:9010/subcat/${subCatId}`,{headers:this.headers}).map((res)=>{
       console.log(res);
       res.json();
     })
   }




}
