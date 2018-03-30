import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { CartService } from "./cart.service";
import { ActivatedRoute, Router } from "@angular/router";
// import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user; // global object of user containing his data
  logged = false;  //global variable that check logged users
  cart;//[1,2,3,4]; //Global Array this should contain products' ids
  purchases; //shoudl be array of objects -- each object includes pid & quantity
  checked=false;
  quantity=0;
  Sum;
  constructor(private login_service:LoginService, private CartService: CartService, private router :Router) {

        console.log('Cart comp');
        console.log('user from home',this.login_service.currentuser.subscribe(userrrr=>{
        console.log(userrrr);
        var userdata=JSON.stringify(userrrr);
        console.log('user string',userdata);
        var x=JSON.parse(userdata);
        if(x.name !=undefined)
        {
            this.user=x;
            this.logged=true;
            console.log('user from Cart',this.user);
        }
      }));
    
        //Get User Products From db
        var token=localStorage.getItem('token');
        this.ShowUserCart();
        
   }
  

  ngOnInit() {
    /// got to api to get the details of every product
    // this.cart.forEach(productId => {
    //   this.CartService.getProduct(productId).subscribe(res=>{
    //     console.log(res)
    //     this.purchases.push(res);
    //   })
    // });

    // this.purchases=[prod1,prod2];
    // this.Sum=this.totalToPay();
  }

  /* cancelOrder(prodName)
  {
    for (let i = 0; i < this.purchases.length; i++) {
      const element = this.purchases[i];
      if (element.name == prodName) {
        this.purchases.splice(i,1)
      }
      console.log(this.purchases);
    }
    this.Sum=this.totalToPay();
  }*/


  totalToPay(){
    let sum=0;
    var newCart=[];
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].productId.price*this.cart[i].quantity;
      newCart.push({productId:this.cart[i].productId._id, quantity:this.cart[i].quantity})
    }
    this.updateQuantity(newCart);
    console.log(newCart);
    this.Sum=sum;
    return sum;
  }

  updateQuantity(newCart){
    var token=localStorage.getItem('token');
    this.CartService.updateQuantity(token,newCart).subscribe(res=>{
      if (res['error']) {
        // show error
      }
    })
  }
  
  checkout(){
    //send purchases to api to save in db then show thanks message
    if (this.logged) {
       var  token=localStorage.getItem('token');
      this.CartService.makeorder(token).subscribe(res=>{
        if(!res['error'])
        { console.log('chkout',this.cart);
           console.log('Ordered'); 
        }else
        {
          console.log('Cant make Order');
        }
      });
      this.checked = true;
    } else {
      this.router.navigate(['login']);
    }

  }



  removeproducet(proid){
    this.CartService.removeproductfrommycart(proid).subscribe((res)=>{
       if(!res.error)
       {
          console.log('product removed from your cart'); 
          this.ShowUserCart();
       }else
       {
        console.log('product  not removed from your cart');
       }

    });
  }



  ShowUserCart()
  {
    //when loading cart component

    var token=localStorage.getItem('token');
    this.CartService.showcart(token).subscribe(res=>{
     if(res)
     {
       console.log('Show Cart');
       console.log(res['result'].cart);
      //  let result = res;
       this.cart=res['result'].cart;
       this.purchases=this.cart;
       this.Sum = this.totalToPay();
     }else
     {
      console.log('Dont Show Cart');
     }
    });

    /*  this.CartService.showcart(token).subscribe((res)=>{
     if(!res.err)
     {
       console.log('cccccccaaaaaaaaaaaarrrrrrttttttt',res.cart[0]);
        this.cart=res.cart;
       console.log('Show Cart');
     }else
     {
      console.log('Dont Show Cart');
     }
    });
     */

}



  
}
