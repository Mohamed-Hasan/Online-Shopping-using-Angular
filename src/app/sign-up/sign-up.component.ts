import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: String;
  email: String;
  password: String;
  repassword: String;
  image: any;
  showImage = false;
  
  constructor() { }

  ngOnInit() {

  }
  submit() {
    var user: object ={
      name: this.name,
      email: this.email,
      password: this.password,
      repassword: this.repassword,
      picture: this.image,
    }
    console.log(user);
    //should send user data to service then to api
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.image = btoa(binaryString);
    this.showImage = true;
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(event.file);
      }

  onRemoved(event) {
    this.image = null;
    this.showImage = false;
  }
}


