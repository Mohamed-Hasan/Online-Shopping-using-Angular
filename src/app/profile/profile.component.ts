import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user={
    id: 1,
    name: "mohamed",
    image: null,
    email: "mohamed.hassan.pet@gmail.com",
    phone: "01097905343",
    address: "Cairo",
  };

  editable = false;
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.editable=true;
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
  submit(){
    console.log(this.user);
    
    //send new data to api to be saved in db
    this.editable=false;
  }
}
