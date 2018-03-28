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

    getSearchResults(searchItem){
        return this.http.get(`https://localhost:9010/search/${searchItem}`,{headers: this.headers}).map(res=>res.json());
    }
}