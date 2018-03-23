import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  seller=false;

  user ={
    name: null,
    email: null,
    password: null,
    repassword: null,
    image: null,
    NationaID: null,
  }
  constructor() { }

  ngOnInit() {

  }
  submit() {
    console.log(this.user);
    if(this.seller==true)
    {
      //should send seller data to service then to api
      
    }else{
      //should send user data to service then to api
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


