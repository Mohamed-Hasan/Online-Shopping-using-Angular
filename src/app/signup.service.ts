import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SignupService {

  constructor(private http:HttpClient) { 

  }


  signupuser(name,pass,email,image):Observable<any>
  {
    var body={email:email,password:pass,name:name,image:image};
     return this.http.post<any>('https://localhost:9010/users/add',body);//.map((res)=>res.json());
 
  }



  signupseller(name,pass,email,image,natid):Observable<any>
  {
    var body={email:email,password:pass,name:name,image:image,NationalId:natid};
     return this.http.post<any>('https://localhost:9010/users/add_seller',body);//.map((res)=>res.json());
 
  }


}
