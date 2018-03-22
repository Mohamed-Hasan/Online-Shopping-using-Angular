import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  added=false;
  product={
  name:null,
  price:0,
  quantity:1,
  description:null,
  image:null,
  };
  constructor() { }

  ngOnInit() {

  }

  submit(){
    console.log(this.product);
    this.product={
      name:null,
      price:0,
      quantity:1,
      description:null,
      image:null,
      };
    //send product to api 
    this.added = true;
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.product.image = btoa(binaryString);
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(event.file);
      }

  onRemoved(event) {
    this.product.image = null;
  }
}
