import { Component, DoCheck, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Http } from "@angular/http";
import { LoginService } from  './login.service' ;
import { Subscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';
import { AllCategoriesService } from "./all-categories/all-categories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
 
  panelOpenState: boolean = false;
  seller;
  query;
  show;
  open = false;
  logged;
  user;
  catArr;
  searchArr = ["Any", "Category", "Subcategory", "price"];

  constructor(private login_service:LoginService, private AppService : AppService,private route: Router, private AllCategoriesService:AllCategoriesService) 
  {
    this.getcategoriesList();  
    console.log('user from home',this.login_service.currentuser.subscribe(userrrr=>{
      var userdata=JSON.stringify(userrrr);
      var x=JSON.parse(userdata);
      if(x.name)
      {
        this.show=false;
        this.logged=true;
        this.user=x;
        if(this.user.isseller)
        {
           this.seller=true;
        }
      }
    }));
  }
  
  ngOnInit(){
    this.getcategoriesList();    
  }
  getcategoriesList(){
    this.AllCategoriesService.getAllCategories().subscribe(res=>{
      console.log(res);
      this.catArr = res;
    })
  }
  
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }



  logout(){

    //get token from loca storage
    localStorage.removeItem('token');
    this.logged=false;
    this.seller=false;
    this.login_service.setduserdata('');
    this.route.navigate(['']);
  }


}


