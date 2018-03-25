import { Component } from '@angular/core';
import { LoginService } from  './login.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  constructor(private login_service:LoginService) 
  {
    
    this.login_service.username="AppComponent Global Service";
    console.log("app comp",this.login_service.username)


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
  ];  /// array of cats

  show = true;
  logged = true;
  user={
    name:"mohamed",
  }
  seller=true;
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }

}


