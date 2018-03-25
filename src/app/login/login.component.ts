import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { LoginService } from  '../login.service' ;
import { DomSanitizer } from '@angular/platform-browser';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular5-social-login';
import {Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginerr:string;
  constructor(private login_service:LoginService,private socialAuthService: AuthService, private route: Router) 
  {
    console.log("login comp")
    console.log('testlogincom',this.login_service.username);
    //testing send token
    // var utoken=localStorage.getItem('token');
    // // var t=JSON.parse(utoken);
    // console.log(utoken);

    // this.login_service.testauth(utoken).subscribe((res)=>{
      
    //   console.log(res);
     //    });

  }
  
    //********************Social Services*********************/
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }else if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
           var uid=userData.id;
           var uname=userData.name;
           var uemail=userData.email;
           var uimage=userData.image;
           var utoken=userData.token; 

          this.login_service.sociallogin(uid,uname,uemail,utoken,uimage).subscribe((res)=>{

            console.log('test social service',res);
            console.log(res.token,res.user);
            //add token
            if(!res.err)
            {
              console.log("Set Token  in Local Storage")
              localStorage.setItem('token',res.token);
              // localStorage.setItem('user',JSON.stringify( res.user));
            
              console.log("User Data",res.user);
              console.log("User Email",res.user.email);
              //Add user data to login service
              this.login_service.username=res.user.name;
              this.login_service.usermail=res.user.email;
              this.login_service.userimage=res.user.image;
              this.login_service.isLogged=true;

              this.route.navigate(['']);

              /*
              var ruser=localStorage.getItem('user');
              if(ruser != 'undefined')
              {
                var t=JSON.parse(ruser);       
                console.log(t.id);
                console.log(t.name);
                console.log(t.email);
                console.log(t.image);
                 this.route.navigate(['']);

              }
             */
            }else{
              //show error message 
              console.log("err",res);
              this.loginerr="Login Failed, Please Try Again";
            }

          });
                               
              
        }
      );
    }

  //********************************************************/
  
   
  ngOnInit() {

  }

  //login
  submit() {
    //should send user to service then api
      this.login_service.login(this.email,this.password).subscribe((res)=>{
        console.log("login result",res);
        if(!res.err)
        {
          localStorage.setItem('token',res.token);
          // localStorage.setItem('user',JSON.stringify( res.user));

          console.log("User Loggend data",res.user);
           //Add user data to login service
           this.login_service.username=res.user.name;
           this.login_service.usermail=res.user.email;
           this.login_service.userimage=res.user.image;
           this.login_service.isLogged=true;

           this.route.navigate(['']);
        
           
        }else{
          //show error message 
          console.log("err",res);
          this.loginerr="Login Failed, Please Try Again";
        }
      
    });
      // console.log("submit");
    
  }




  //user email
  forget_Password(email)
  {
    this.login_service.forgetPassword(this.email).subscribe((res)=>{
      if(res.emailsent){
      console.log("sent mail",res);
      
     //check your mail for password
      }else
      {
        //mail is not valid
      }
   });

  }



}
