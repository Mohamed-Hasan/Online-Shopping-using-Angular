import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SearchService {
    headers;
    constructor(private http: Http) {
       this.headers = new Headers();
       this.headers.append('Content-Type', 'application/json');
    }

    getSearchResults(searchItem,page){
        return this.http.post(`https://localhost:9010/products/get/${page}`,searchItem).map(res=>res.json());
    }


}