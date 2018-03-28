import { HomeService } from './home.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from  '../login.service' ;
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  
  product = {
    id: 2,
    name: "iphone",
    price: 800,
    rating: 3.5,
    image: null,
    available: 5,
    desc: "afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
  }


 
  msg;

  constructor(private login_service:LoginService, private HomeService: HomeService,private route: Router) { 
     console.log('home comp');
   
    
  }


  product1 = {
    id: 2,
    name: "iphone",
    price: 800,
    rating: 3.5,
    image: null,
    available: 5,
    desc: "afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
  }

  product2 = {
    id: 2,
    name: "iphone s6",
    price: 1000,
    rating: 4,
    image: null,
    available: 5,
    desc: "afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre",
  }
  products = [this.product1, this.product2];

  getProducts(){
    this.HomeService.getProducts().subscribe(res=>{
      console.log(res);
      this.products = res;
    })
  }
    
 



  ngOnInit() {
  }


  //  ngDoCheck() { console.log('user from global login service',this.login_service.username);  }

  addToCart(proid) {

    console.log('user from home',this.login_service.currentuser.subscribe(userrrr=>{
      console.log(userrrr);
      var userdata=JSON.stringify(userrrr);
      console.log('user string',userdata);
      var x=JSON.parse(userdata);
    
      if(x.name !=undefined)
      {
        
        var utoken=localStorage.getItem('token');
        console.log('product name',proid);
        this.HomeService.addproducttocart(utoken,proid).subscribe(res=>{
          if(!res.err)
          {
            console.log('Product added to db');
            this.msg="Product added To Your Cart";
              //product didnt add to db
          }else
          {
            this.msg="Product didnot addedd To Your Cart";
            //product  add to db
          }
            
        });
        
      }else
      {
        this.route.navigate(['/login']);
      }
      
    }));


  }




}
