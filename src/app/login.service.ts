import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  public username:string;
  public isLogged:boolean;
  public usermail:string;
  public userimage:string;
  public chart=[];
   

  constructor(private http:HttpClient) {

   }


   sociallogin(id,name,email,image,token):Observable<any>
   {
     console.log('service');
      var body={id,name,email,image,token};
      return this.http.post<any>('https://localhost:9010/socialmedia/login',body);
   }
   

  login(email,pass):Observable<any>
  {
    var body={email:email,password:pass};
    return this.http.post<any>('https://localhost:9010/login/',body);//.map((res)=>res.json());
 
  }
  
  
  forgetPassword(email):Observable<any>
  {
    var body={email:email};

    return this.http.post<any>('https://localhost:9010/auth/forgetpassword',body);

  }



 testauth(usertoken):Observable<any>
 {
  //  var header=new HttpHeaders();
  //  header.append('Authorization',usertoken);
  //  console.log('hhhhhhh',header.getAll);
  var body={
    usertoken:usertoken
  };
  return this.http.post<any>('https://localhost:9010/socialmedia/test',body);
 
}


}
