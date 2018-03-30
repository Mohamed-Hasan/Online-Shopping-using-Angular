import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{

    headers;
    constructor( private http: Http ){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('x_access_token', localStorage.getItem('token'));
    };

    // getAllCategories(){
    //     return this.http.get('http://127.0.0.1:9090/allcat',{headers: this.headers}).map(res=>res.json());
    // }
}