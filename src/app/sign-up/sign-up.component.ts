import { Component, OnInit } from '@angular/core';
import {SignupService } from  '../signup.service' ;
import {Router} from '@angular/router';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  seller=false;
  msg;

  user ={
    name: null,
    email: null,
    password: null,
    repassword: null,
    image: null,
    NationaID: null,
    address:null,
  }
  constructor(private signup_service:SignupService,private route: Router) { }

  ngOnInit() {

  }
  submit() {
    console.log(this.user);
 
    if(this.seller==true)
    {
      //should send seller data to service then to api
      this.signup_service.signupseller(this.user.name,this.user.password,this.user.email,this.user.image,this.user.NationaID,this.user.address).subscribe(
        (res)=>{
          console.log('sellerrrrrrrrrrrrr',res);
          if(!res.err)
          {
             //go to login
             
             this.route.navigate(['/login']);
          }else
          {
            console.log("Seller  not added",res.err);
              //duplicated email
              console.log("Seller Dont added");
               this.msg="Invalid User Data ";
          }
          
        }); 
     
      
    }else{
      //should send user data to service then to api
      this.signup_service.signupuser(this.user.name,this.user.password,this.user.email,this.user.image,this.user.address).subscribe(
        (res)=>{
          console.log('userrrrrrrrrrrrrrrrr',res);
          if(!res.err)
          {
            // console.log("Seller added",res.err);
             //go to login
             console.log("User added");
             this.route.navigate(['/login']);
          }else
          {
            console.log("Test user not  added",res.err);
              //duplicated email
              console.log("User dont added");
               this.msg="Invalid User Data ";
          }
          
        }); 
     
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.user.image = btoa(binaryString);
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(event.file);
      }

  onRemoved(event) {
    this.user.image = null;
  }

  sellerSignup(){
    this.seller=true;
  }
}


