import { Component, OnInit } from '@angular/core';
import { AddProductService } from "./add-product.service";
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
  constructor( private AddProductService: AddProductService ) { }

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
    this.AddProductService.addProduct(this.product).subscribe(res => console.log(res));
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
