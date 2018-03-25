import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from  '../login.service' ;




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit, DoCheck {

  constructor(private login_service:LoginService) { 
     console.log('home comp');
      console.log('user user',this.login_service.username);
      console.log('user Logged',this.login_service.isLogged);
      console.log('user email',this.login_service.usermail);
      console.log('user image',this.login_service.userimage);
    
  }

  ngOnInit() {
  }

  ngDoCheck() { console.log('user from global login service',this.login_service.username); }
}
