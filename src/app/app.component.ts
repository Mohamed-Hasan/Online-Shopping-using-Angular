
import { Component, DoCheck } from '@angular/core';
import { AppService } from './app.service';
<<<<<<< HEAD
import { LoginService } from  './login.service';
import { Http } from "@angular/http";
=======
import { LoginService } from  './login.service' ;
import { Subscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';
>>>>>>> abd6addda7673b624bcd801e68bf20d1109cd580

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
<<<<<<< HEAD
// export class SidenavAutosizeExample {
//   showFiller = false;
// }
export class AppComponent {
  CatArr;

  constructor(private login_service: LoginService, private AppService : AppService) 
=======

export class AppComponent implements DoCheck {

  show;
  logged;
  user={name:''};

  CatArr;

  constructor(private login_service:LoginService, private AppService : AppService,private route: Router) 
>>>>>>> abd6addda7673b624bcd801e68bf20d1109cd580
  {
        
      console.log("AppComponent Global Service");
      console.log('user from home',this.login_service.currentuser.subscribe(userrrr=>{
      console.log(userrrr);
      var userdata=JSON.stringify(userrrr);
      console.log('user string',userdata);
      var x=JSON.parse(userdata);
    
      if(x.name !=undefined)
      {
        this.show=false;
        this.logged=true;
        this.user=x;
        console.log('nameeeeeeeeee from app',this.user.name);
      }
      
    }));
    
   

  }
  
  
  getAllCategories(){
    this.AppService.getAllCategories().subscribe(res =>{
      console.log(res);
      this.CatArr = res;
    })

  }


  
 

  categories = 
  [
    {
      name:"women",
      subcat:["sub1", "sub2", "sub3"],
    }, 
    {
      name:"men",
      subcat:["sub11", "sub22", "sub33"],
    }, 
    {
      name:"children",
      subcat:["sub111", "sub222", "sub333"],
    }
  ]; 

  
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }


  ngDoCheck(){


    
  }


  logout(){

    //get token from loca storage
    localStorage.removeItem('token');
    this.logged=false;
    this.login_service.setduserdata('');
    this.route.navigate(['']);
  }


}


