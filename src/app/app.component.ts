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


  show = true;
  logged = false;
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }

}
