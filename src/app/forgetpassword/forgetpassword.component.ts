import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";




@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
msg;
email;

  constructor(private login_service:LoginService) { }

  ngOnInit() {
  }

  submit()
  {
      console.log(this.email);
      this.login_service.forgetPassword(this.email).subscribe((res)=>{
      console.log('forget',res);
        if(!res.err)
        {
          this.msg="Please check Check Your Mail";
        }else
        {
          this.msg="Email not valid";
        }
        
      });
  }

}
